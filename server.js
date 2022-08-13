const express = require('express');
const app = express();
app.use(express.static('./dist/client'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/client/'}
);
});

const http = require('http').Server(app);
// const io = require('socket.io')(http);

const io = require('socket.io')(http, {
    cors: {
      origin: "https://poutinequiz.herokuapp.com/" + process.env.PORT || 8080
    }
  });

http.listen(process.env.PORT || 8080, () => {
    console.log('Listening on port 8080');
});

var teams = {}
var adminSocketID = ""
var questionID = 0
var questions = []
var answers = []
var control = false

io.on("connection", socket => {
  //Admin management
  socket.on('new-admin-connection', () => {
    if(adminSocketID === "") {
      adminSocketID = socket.id
      socket.emit('send-teams', teams);
    } else {
      socket.emit('user-rejected')
    }
  })

  //User management - User connection
  socket.on('new-connection', (teamName) => {
    if(teams[teamName] && teams[teamName].logged) {
      socket.emit('user-rejected')
    } else if(teams[teamName] && !teams[teamName].logged) {
      teams[teamName].socketId = socket.id
      teams[teamName].logged = true
      io.emit('send-teams', teams)
    } else {
      questions.forEach(question => {
        answers.push({
          teamName: teamName,
          questionID: question.id,
          answer: '',
          timestamp: Date.now() + 86400000,
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

  //Disconnection
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
    io.emit('send-teams', teams);
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
          timestamp: Date.now() + 86400000,
          correct: -1,
          bonus: 0
        })
      }
    })
    io.emit('send-questions', questions)
    io.emit('get-answers', answers)
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
        element.answer = data.answer
        element.timestamp = data.timestamp
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

  socket.on('bonus-answer', (teamName, questionID) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.bonus === 1 ? element.bonus = 0 : element.bonus = 1
      }
    })
    io.emit('get-answers', answers)
    io.emit('send-teams', getScores())
  })

  socket.on('clear-answer', (teamName, questionID) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.answer = ''
        element.timestamp = Date.now() + 86400000
        element.correct = -1
        element.bonus = 0
      }
    })
    io.emit('get-answers', answers)
    io.emit('send-teams', getScores())
  })
});

function getScores() {
  for(const key in teams) {
    teams[key].score = 0
  }
  answers.forEach(answer => {
    if(answer.correct === 1) {
      teams[answer.teamName].score = teams[answer.teamName].score + questions[answer.questionID-1].points
    } else if(answer.correct === 0 && questions[answer.questionID-1].speed === true) {
      teams[answer.teamName].score = teams[answer.teamName].score - questions[answer.questionID-1].points
      for(const key in teams) {
        if(teams[key].name !== answer.teamName) {
          teams[key].score++
        }
      }
    }
    teams[answer.teamName].score = teams[answer.teamName].score + answer.bonus
  })
  return teams
};