// const fs = require('fs'); //To read/write in json files

const mongoose = require('mongoose');
// Models mongoose
const TeamDB = require('./models/teams');
const QuestionDB = require('./models/questions');
const AnswerDB = require('./models/answers');
const ParamDB = require('./models/param');

const express = require('express');
const app = express();

//For HerokuApp
//-----------------------------------------------------------------
mongoose.connect('mongodb+srv://GrandeFrite:452cx27pz@cluster0.tmhxw.mongodb.net/poutinequiz?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.static('./dist/client'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/client/'}
);
});

const http = require('http').Server(app);
//-----------------------------------------------------------------

//For Local server
//-----------------------------------------------------------------
// mongoose.connect('mongodb+srv://GrandeFrite:452cx27pz@cluster0.tmhxw.mongodb.net/poutinequizlocal?retryWrites=true&w=majority',
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));
// const http = require('http').createServer(app);
//-----------------------------------------------------------------

const io = require('socket.io')(http, {
  cors: {
    origin: "*"
  }
});

http.listen(process.env.PORT || 8080, () => {
  console.log('Listening on port 8080');
});

var teams = {}
var teamsSave = {}
var adminSocketID = ""
var questionID = 0
var questions = []
var answers = []
var control = false

io.on("connection", socket => {
  //------------------------------------------------------------------------------------
  //---------------------- Admin management --------------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('new-admin-connection', () => {
    if(adminSocketID === "") {
      adminSocketID = socket.id
      socket.emit('send-teams', teams);
    } else {
      socket.emit('user-rejected')
    }
  })

  //------------------------------------------------------------------------------------
  //---------------------- User management ---------------------------------------------
  //------------------------------------------------------------------------------------
  // User connection
  socket.on('new-connection', (teamName) => {
    if(teams[teamName] && teams[teamName].logged) { //team already existing and logged
      socket.emit('user-rejected')
    } else if(teams[teamName] && !teams[teamName].logged) { //team already existing but not logged
      teams[teamName].socketId = socket.id
      teams[teamName].logged = true
      io.emit('send-teams', teams)
    } else { //team not existing
      questions.forEach(question => {
        answers.push({
          teamName: teamName,
          questionID: question.id,
          answer: '',
          timestamp: Date.now() + 7200000,
          correct: -1,
          bonus: 0
        })
      })

      teams[teamName] = {
        socketId: socket.id,
        name: teamName,
        group: 0,
        score: 0,
        logged: true
      }
      io.emit('send-teams', getScores())
      io.emit('get-answers', answers)
    }
  })

  //Forced disconnection
  socket.on('disconnect-team', (teamName) => {
    for(const key in teams) {
      if(teams[key].name === teamName) {
        teams[key].logged = false
        io.emit('team-disconnection', teams[key].name)
        io.emit('send-teams', teams);
      }
    }
  })

  //Ejection
  socket.on('eject-team', (teamName) => {
    for(const key in teams) {
      if(teams[key].name === teamName) {
        delete teams[key]
      }
    }
    answers = answers.filter(answer => answer.teamName !== teamName)
    
    io.emit('team-disconnection', teamName);
    io.emit('send-teams', getScores());
    io.emit('get-answers', answers)
  })

  //Timeout disconnection
  socket.on('disconnect', () => {
    //Admin disconnection
    if(adminSocketID === socket.id) { 
      adminSocketID = ""
    }

    //user disconnection
    for(const key in teams) {
      if(teams[key].socketId === socket.id) {
        teams[key].logged = false
      }
    }
    io.emit('send-teams', teams);
  })

  //Group update
  socket.on('refresh-group', (teamName) => {
    socket.emit('send-group', teams[teamName].group)
  })

  socket.on('update-team-group', (teamName, teamGroup) => {
    teams[teamName].group = teamGroup;
    io.emit('send-teams', getScores())
    io.to(teams[teamName].socketId).emit('send-group', teams[teamName].group)
  })

  //------------------------------------------------------------------------------------
  //---------------------- Questions management ----------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('start-quiz', (data) => {
    questions = data
    questions.forEach(question => {
      for(const key in teams) {
        answers.push({
          teamName: teams[key].name,
          questionID: question.id,
          answer: '',
          timestamp: Date.now() + 7200000,
          correct: -1,
          bonus: 0
        })
      }
    })
    io.emit('send-questions', questions)
    io.emit('get-answers', answers)
  })

  socket.on('reset-quiz', () => {
    questions = []
    answers =[]
    questionID = 0
    
    io.emit('update-question-ID', questionID)
    io.emit('get-answers', answers)
    io.emit('send-questions', questions)
    io.emit('send-teams', getScores())
  })

  socket.on('refresh-questions', () => {
    io.emit('send-questions', questions)
  })
  
  socket.on('refresh-question-ID', () => {
    io.emit('update-question-ID', questionID)
  })

  socket.on('go-to-question', (id) => {
    console.log(`Sent to question n°${id}.`)
    questionID = id
    io.emit('update-question-ID', questionID)
  })

  socket.on('question-correction', () => {
    if(questions[questionID - 1].corrected) {
      questions[questionID - 1].corrected = false
      answers.forEach(element => {
        if(element.questionID === questionID) {
          element.correct = -1
          element.bonus = 0
        }
      })
    } else {
      questions[questionID - 1].corrected = true
    }
    io.emit('send-teams', getScores())
    io.emit('send-questions', questions)
    io.emit('get-answers', answers)
  })

  //------------------------------------------------------------------------------------
  //---------------------- Answers management ------------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('refresh-answers', () => {
    socket.emit('get-answers', answers)
  })

  socket.on('send-answer', (data) => {
    control = false
    answers.forEach(element => {
      if(element.teamName === data.teamName && element.questionID === data.questionID) {
        if(element.answer !== data.answer) {
          element.answer = data.answer
          element.timestamp = data.timestamp
        }
        control = true
      }
    })
    if(!control) {answers.push(data)}
    io.emit('get-answers', answers)
  })

  socket.on('valid-answer', (teamName, questionID, answerState) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.correct = answerState
      }
    })
    io.emit('get-answers', answers)
    io.emit('send-teams', getScores())
  })

  socket.on('bonus-answer', (teamName, questionID, bonus) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.bonus = element.bonus + bonus
      }
    })
    io.emit('get-answers', answers)
    io.emit('send-teams', getScores())
  })

  socket.on('clear-answer', (teamName, questionID) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.answer = ''
        element.timestamp = Date.now() + 7200000
        element.correct = -1
        element.bonus = 0
      }
    })
    io.emit('get-answers', answers)
    io.emit('send-teams', getScores())
  })

  //------------------------------------------------------------------------------------
  //---------------------- Save management ---------------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('save', () => {
    ParamDB.deleteMany({})
      .then()
      .catch((error) => {console.log(error)});
      ParamDB.insertMany({ID: 1, nb: questionID})
      .then(() => {console.log('Question ID saved!')})
      .catch((error) => {console.log(error)});
    
    teamsSave = teams
    for(const key in teamsSave) {
      teamsSave[key].logged = false
    }
    TeamDB.deleteMany({})
      .then()
      .catch((error) => {console.log(error)});
    TeamDB.insertMany(Object.values(teamsSave))
      .then(() => {console.log('Teams saved!')})
      .catch((error) => {console.log(error)});

    QuestionDB.deleteMany({})
      .then()
      .catch((error) => {console.log(error)});
    QuestionDB.insertMany(questions)
      .then(() => {console.log('Questions saved!')})
      .catch((error) => {console.log(error)});

    AnswerDB.deleteMany({})
      .then()
      .catch((error) => {console.log(error)});
    AnswerDB.insertMany(answers)
      .then(() => {console.log('Answers saved!')})
      .catch((error) => {console.log(error)});
  })

  socket.on('reload', () => {
    for(const key in teams) {
        teams[key].logged = false
        io.emit('team-disconnection', teams[key].name)
        io.emit('send-teams', teams);
        delete teams[key]
    }

    QuestionDB.find()
      .then(questionsDB => {
        questions = questionsDB
        io.emit('send-questions', questions)

        AnswerDB.find()
          .then(answersDB => {
            answers = answersDB
            io.emit('get-answers', answers)

            TeamDB.find()
              .then(teamsDB => {
                teamsDB.forEach(teamDB => {
                  teams[teamDB.name] = {
                    socketId: '',
                    name: teamDB.name,
                    group: teamDB.group,
                    score: teamDB.score,
                    logged: false
                  }
                })
                io.emit('send-teams', getScores())

                ParamDB.findOne({ID: 1})
                  .then(paramsDB => {
                    questionID = paramsDB.nb
                    io.emit('update-question-ID', questionID)
                  })
                  .catch((error) => {console.log(error)});
              })
              .catch((error) => {console.log(error)});
          })
          .catch((error) => {console.log(error)});
      })
      .catch((error) => {console.log(error)});
  })
});

//------------------------------------------------------------------------------------
//---------------------- Accessory functions -----------------------------------------
//------------------------------------------------------------------------------------
function getScores() {
  var incorrectAnswers = 0
  var smallestScore = 10000
  for(const key in teams) {
    teams[key].score = 0
  }

  for(let i = 1; i <= questions.length; i++) {
    incorrectAnswers = 0
    smallestScore = 10000
    answers.forEach(answer => {
      if(answer.questionID === i) {
        if(answer.correct === 1) {
          teams[answer.teamName].score = teams[answer.teamName].score + questions[answer.questionID-1].points
        } else if(answer.correct === 0 && questions[answer.questionID-1].speed === true) {
          teams[answer.teamName].score = teams[answer.teamName].score - questions[answer.questionID-1].points
          incorrectAnswers = incorrectAnswers + 1
        }

        if(teams[answer.teamName].score < smallestScore) {
          smallestScore = teams[answer.teamName].score
        }

        teams[answer.teamName].score = teams[answer.teamName].score + answer.bonus
      }
    })

    //To give points to the last teams
    if(incorrectAnswers > 0) {
      for(const key in teams) {
        if(teams[key].score === smallestScore) {
          teams[key].score = teams[key].score + Math.trunc((incorrectAnswers + 1) / 2)
        }
      }
    }
  }

  // Old score algorythm
  // answers.forEach(answer => {
  //   if(answer.correct === 1) {
  //     teams[answer.teamName].score = teams[answer.teamName].score + questions[answer.questionID-1].points
  //   } else if(answer.correct === 0 && questions[answer.questionID-1].speed === true) {
  //     teams[answer.teamName].score = teams[answer.teamName].score - questions[answer.questionID-1].points
  //     for(const key in teams) {
  //       if(teams[key].name !== answer.teamName && teams[key].group !== teams[answer.teamName].group) {
  //         teams[key].score++
  //       }
  //     }
  //   }
  //   teams[answer.teamName].score = teams[answer.teamName].score + answer.bonus
  // })
  return teams
};