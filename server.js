// const fs = require('fs'); //To read/write in json files

const mongoose = require('mongoose');
// Models mongoose
const TeamDB = require('./models/teams');
const QuestionDB = require('./models/questions');
const MenuTeamGroupDB = require('./models/menuTeamGroups');
const AnswerDB = require('./models/answers');
const ParamDB = require('./models/param');
const PropositionsDB = require('./models/propositions');

const express = require('express');
const { TestScheduler } = require('rxjs/testing');
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
var menuTeamGroup = {}
var adminSocketID = ""
var questionID = 0
var negativePoints = false
var bonusesWrongAnswers = true
var percentErrorsTiers = [30, 50]
var bonusWrong = [2, 2, 1]
var teamThreshold = 20
var teamThresholdModifier = 1.5
var questions = []
var answers = []
var control = false
var lockspeed = true

io.on("connection", socket => {
  //------------------------------------------------------------------------------------
  //---------------------- Admin management --------------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('new-admin-connection', () => {
    if(adminSocketID === "") {
      adminSocketID = socket.id
      socket.emit('send-teams', teams);
    } else {
      // socket.emit('user-rejected')
    }
  })

  //------------------------------------------------------------------------------------
  //---------------------- User management ---------------------------------------------
  //------------------------------------------------------------------------------------
  //Teams refreshment
  socket.on('refresh-teams', () => {
    io.emit('send-teams', getScores())
  })

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
          timestamp: 1989811953988,
          correct: -1,
          points: 0,
          bonusWrongAnswers: 0,
          bonus: 0
        })
      })

      teams[teamName] = {
        socketId: socket.id,
        name: teamName,
        group1: 0,
        group2: 0,
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
    socket.emit('send-group', teams[teamName].group1, teams[teamName].group2)
  })

  socket.on('update-team-group', (round, teamName, teamGroup) => {
    if(round === 1) {teams[teamName].group1 = teamGroup;}
    if(round === 2) {teams[teamName].group2 = teamGroup;}
    io.emit('send-teams', teams)
    io.to(teams[teamName].socketId).emit('send-group', teams[teamName].group1, teams[teamName].group2)
  })

  //------------------------------------------------------------------------------------
  //---------------------- Display management ------------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('show-question', () => {
    questions[questionID - 1].showQuestion = questions[questionID - 1].showQuestion ? false : true
    io.emit('send-questions', questions, menuTeamGroup)
  })
  
  socket.on('go-to-step', step => {
    if(step <= questions[questionID-1].propositionsDetailed.length) {
      questions[questionID-1].propositionsStep = step
      io.emit('send-questions', questions, menuTeamGroup)
    }
  })

  socket.on('show-answer', () => {
    questions[questionID - 1].showAnswer = questions[questionID - 1].showAnswer ? false : true
    io.emit('send-questions', questions, menuTeamGroup)
  })

  //------------------------------------------------------------------------------------
  //---------------------- Questions management ----------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('start-quiz', (data) => {
    questions = data
    questions.forEach(question => {
      if(question.group) {
        if(!menuTeamGroup[question.group + '-' + question.round]) {
          menuTeamGroup[question.group + '-' + question.round] = {
            menuNb: question.group,
            round: question.round,
            teamGroup: -1
          }
        }
      };

      for(const key in teams) {
        answers.push({
          teamName: teams[key].name,
          questionID: question.id,
          answer: '',
          timestamp: 1989811953988,
          correct: -1,
          points: 0,
          bonusWrongAnswers: 0,
          bonus: 0
        })
      }
    })
    io.emit('send-questions', questions)
    io.emit('send-menu-groups', menuTeamGroup)
    io.emit('get-answers', answers)
  })

  socket.on('reset-quiz', () => {
    questions = []
    answers =[]
    menuTeamGroup = {}
    questionID = 0
    
    io.emit('update-question-ID', questionID)
    io.emit('send-questions', questions)
    io.emit('send-menu-groups', menuTeamGroup)
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('refresh-questions', () => {
    io.emit('send-questions', questions)
    io.emit('send-menu-groups', menuTeamGroup)
  })
  
  socket.on('refresh-question-ID', () => {
    io.emit('update-question-ID', questionID)
  })

  socket.on('refresh-scoreSettings', () => {
    io.emit('update-scoreSettings', lockspeed, negativePoints, bonusesWrongAnswers, teamThreshold, teamThresholdModifier, percentErrorsTiers, bonusWrong)
  })

  socket.on('change-lock-speed', lockState => {
    lockspeed = lockState
    io.emit('change-lock-speed', lockspeed)
  })

  socket.on('change-negative-points', negPts => {
    negativePoints = negPts
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('change-bonuses-wrong-answers', bonuses => {
    bonusesWrongAnswers = bonuses
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('change-threshold', Threshold => {
    teamThreshold = Threshold
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('change-threshold-modifier', ThresholdModifier => {
    teamThresholdModifier = ThresholdModifier
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('change-percent-error', percentErrors => {
    percentErrorsTiers = percentErrors
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('update-bonuses', bonuses => {
    bonusWrong = bonuses
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('go-to-question', (id) => {
    questionID = id
    io.emit('update-question-ID', questionID)
  })

  socket.on('question-correction', () => {
    if(questions[questionID - 1].locked) {
      questions[questionID - 1].showAnswer = false
      questions[questionID - 1].locked = false
      answers.forEach(element => {
        if(element.questionID === questionID) {
          element.correct = -1
          element.points = 0
          element.bonusWrongAnswers = 0
        }
      })
    } else {
      questions[questionID - 1].locked = true
    }
    io.emit('send-teams', getScores())
    io.emit('send-questions', questions, menuTeamGroup)
    io.emit('get-answers', answers)
  })

  socket.on('update-menu-team-group', (menuNb, round, teamGroup) => {
    menuTeamGroup[menuNb + '-' + round].teamGroup = teamGroup;
    io.emit('send-menu-groups', menuTeamGroup)
  });

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
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('bonus-answer', (teamName, questionID, bonus) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.bonus = element.bonus + bonus
      }
    })
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('clear-answer', (teamName, questionID) => {
    answers.forEach(element => {
      if(element.teamName === teamName && element.questionID === questionID) {
        element.answer = ''
        element.timestamp = 1989811953988
        element.correct = -1
        element.points = 0
        element.bonusWrongAnswers = 0
        element.bonus = 0
      }
    })
    io.emit('send-teams', getScores())
    io.emit('get-answers', answers)
  })

  socket.on('get-team-scores', teamName => {
    let teamScores = []
    let total = 0
    answers.forEach(answer => {
      if(answer.teamName === teamName) {
        total += answer.points + answer.bonus + answer.bonusWrongAnswers
        teamScores.push({
          questionID: answer.questionID,
          corrected: answer.correct,
          points: answer.points,
          bonusManual: answer.bonus,
          bonusAuto: answer.bonusWrongAnswers,
          total: total
        })
      }
    })

    socket.emit('send-team-scores', teamScores)
  })

  //------------------------------------------------------------------------------------
  //---------------------- Save management ---------------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('save', () => {
    ParamDB.deleteMany({})
      .then(
        ParamDB.insertMany({
          ID: 1, 
          nb: questionID, 
          negPoints: negativePoints, 
          bonusesWrongAnswers: bonusesWrongAnswers,
          teamThreshold: teamThreshold,
          teamThresholdModifier: teamThresholdModifier,
          percentErrorsTiers: percentErrorsTiers,
          bonusWrong: bonusWrong,
          lockSpeed: lockspeed
        })
          .then(() => {console.log('Parameters saved!')})
          .catch((error) => {console.log(error)})
      )
      .catch((error) => {console.log(error)});

    MenuTeamGroupDB.deleteMany({})
      .then(
        MenuTeamGroupDB.insertMany(Object.values(menuTeamGroup))
          .then(() => {console.log('Menu distribution saved!')})
          .catch((error) => {console.log(error)})
      )
      .catch((error) => {console.log(error)});
    
    teamsSave = teams
    for(const key in teamsSave) {
      teamsSave[key].logged = false
    }
    TeamDB.deleteMany({})
      .then(
        TeamDB.insertMany(Object.values(teamsSave))
          .then(() => {console.log('Teams saved!')})
          .catch((error) => {console.log(error)})
      )
      .catch((error) => {console.log(error)});

    QuestionDB.deleteMany({})
      .then(
        QuestionDB.insertMany(questions)
          .then(() => {console.log('Questions saved!')})
          .catch((error) => {console.log(error)})
      )
      .catch((error) => {console.log(error)});

    AnswerDB.deleteMany({})
      .then(
        AnswerDB.insertMany(answers)
          .then(() => {console.log('Answers saved!')})
          .catch((error) => {console.log(error)})
      )
      .catch((error) => {console.log(error)});
  })

  socket.on('reload', () => {
    for(const key in teams) {
        teams[key].logged = false
        io.emit('team-disconnection', teams[key].name)
        io.emit('send-teams', teams);
        delete teams[key]
    }

    MenuTeamGroupDB.find()
      .then(menuTeamGroupDB => {
        menuTeamGroupDB.forEach(menu => {
          menuTeamGroup[menu.menuNb + '-' + menu.round] = {
            menuNb: menu.menuNb,
            round: menu.round,
            teamGroup: menu.teamGroup
          }
        })
        io.emit('send-menu-groups', menuTeamGroup)

        QuestionDB.find()
          .then(questionsDB => {
            questions = questionsDB
            questions.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
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
                        group1: teamDB.group1,
                        group2: teamDB.group2,
                        score: teamDB.score,
                        logged: false
                      }
                    })
                    io.emit('send-teams', getScores())

                    ParamDB.findOne({ID: 1})
                      .then(paramsDB => {
                        questionID = paramsDB.nb
                        negativePoints = paramsDB.negPoints
                        bonusesWrongAnswers = paramsDB.bonusesWrongAnswers
                        teamThreshold = paramsDB.teamThreshold
                        teamThresholdModifier = paramsDB.teamThresholdModifier
                        percentErrorsTiers = paramsDB.percentErrorsTiers
                        bonusWrong = paramsDB.bonusWrong
                        lockspeed = ParamDB.lockSpeed
                        io.emit('update-question-ID', questionID)
                        io.emit('update-scoreSettings', lockspeed, negativePoints, bonusesWrongAnswers, teamThreshold, teamThresholdModifier, percentErrorsTiers, bonusWrong)
                      })
                      .catch((error) => {console.log(error)});
                  })
                  .catch((error) => {console.log(error)});
              })
              .catch((error) => {console.log(error)});
          })
          .catch((error) => {console.log(error)});
          })
      .catch((error) => {console.log(error)})
  })

  //------------------------------------------------------------------------------------
  //---------------------- Propositions management -------------------------------------
  //------------------------------------------------------------------------------------
  socket.on('sendPropositions', (nuggets, selOuPoivres, menus, additions) => {
    if(nuggets.propositions.length > 0) {
      PropositionsDB.insertMany(nuggets)
        .then(() => {console.log('Nuggets sent!')})
        .catch((error) => {console.log(error)});
    }
    
    if(selOuPoivres.propositions.length > 0) {
      PropositionsDB.insertMany(selOuPoivres)
        .then(() => {console.log('Sel ou Poivre sent!')})
        .catch((error) => {console.log(error)});
    }
    
    if(menus.propositions.length > 0) {
      PropositionsDB.insertMany(menus)
        .then(() => {console.log('Menu sent!')})
        .catch((error) => {console.log(error)});
    }
    
    if(additions.propositions.length > 0) {
      PropositionsDB.insertMany(additions)
        .then(() => {console.log('Addition sent!')})
        .catch((error) => {console.log(error)});
    }

    socket.emit('propositionsSaved');
  })
});

//------------------------------------------------------------------------------------
//---------------------- Accessory functions -----------------------------------------
//------------------------------------------------------------------------------------
function getScores() {
  var incorrectAnswers = 0
  var percentErrors = 0
  var numberAnswers = 0
  var numberTeamsTier1 = 0
  var numberTeamsTier2 = 0
  var firstSmallestScore = 10000
  var secondSmallestScore = 10000
  var thirdSmallestScore = 10000
  var bonusWrongAnswers = 0
  
  for(const key in teams) {
    teams[key].score = 0
  }

  for(let i = 1; i <= questions.length; i++) {
    incorrectAnswers = 0
    percentErrors = 0
    numberAnswers = 0
    numberTeamsTier1 = 0
    numberTeamsTier2 = 0
    firstSmallestScore = 10000
    secondSmallestScore = 10000
    thirdSmallestScore = 10000

    answers.forEach(answer => {
      if(answer.questionID === i) {
        answer.points = 0
        answer.bonusWrongAnswers = 0
        numberAnswers++
        if(answer.correct === 1) {
          answer.points = questions[answer.questionID-1].points
        } else if(answer.correct === 0 && questions[answer.questionID-1].speed === true) {
          if(negativePoints) {answer.points = - questions[answer.questionID-1].points}
          incorrectAnswers = incorrectAnswers + 1
        }

        teams[answer.teamName].score = teams[answer.teamName].score + answer.points + answer.bonus

        if(teams[answer.teamName].score < firstSmallestScore) {
          thirdSmallestScore = secondSmallestScore
          secondSmallestScore = firstSmallestScore
          firstSmallestScore = teams[answer.teamName].score
        }
        if(teams[answer.teamName].score < secondSmallestScore && teams[answer.teamName].score > firstSmallestScore) {
          thirdSmallestScore = secondSmallestScore
          secondSmallestScore = teams[answer.teamName].score
        }
        if(teams[answer.teamName].score < thirdSmallestScore && teams[answer.teamName].score > secondSmallestScore) {
          thirdSmallestScore = teams[answer.teamName].score
        }
      }
    })
    
    percentErrors = Math.round(100 * incorrectAnswers / numberAnswers)
    // console.log("Questions #" + i + "(" + percentErrors + "%) 1st: " + firstSmallestScore + ", 2nd: " + secondSmallestScore + ", 3rd: " + thirdSmallestScore)

    //To give points to the last teams
    if(bonusesWrongAnswers) {
      for(const key in teams) {
        switch(teams[key].score) {
          case firstSmallestScore:
            numberTeamsTier1++
            break;

          case secondSmallestScore:
            numberTeamsTier2++
            break;
        }
      }

      for(const key in teams) {
        bonusWrongAnswers = 0

        if(teams[key].score === firstSmallestScore) {
          switch(true) {
            case (percentErrors === 0):
              break;
            
            case (percentErrors >= percentErrorsTiers[1]):
                bonusWrongAnswers = bonusWrong[0]
                teams[key].score = teams[key].score + bonusWrong[0]
              break;
            
            case (percentErrors >= percentErrorsTiers[0]):
              bonusWrongAnswers = bonusWrong[1]
              teams[key].score = teams[key].score + bonusWrong[1]
              break;
            
            default:
              bonusWrongAnswers = bonusWrong[2]
              teams[key].score = teams[key].score + bonusWrong[2]
              break;
          }
        } else if(teams[key].score === secondSmallestScore && Math.round(100 * numberTeamsTier1 / numberAnswers) < teamThreshold) {
          switch(true) {
            case (percentErrors === 0):
              break;
            
            case (percentErrors >= percentErrorsTiers[1]):
              bonusWrongAnswers = bonusWrong[1]
              teams[key].score = teams[key].score + bonusWrong[1]
              break;
            
            case (percentErrors >= percentErrorsTiers[0]):
              bonusWrongAnswers = bonusWrong[2]
              teams[key].score = teams[key].score + bonusWrong[2]
              break;
            
            default:
              break;
          }
        } else if(teams[key].score === thirdSmallestScore && Math.round(100 * (numberTeamsTier1 + numberTeamsTier2) / numberAnswers) < teamThreshold * teamThresholdModifier) {
          switch(true) {
            case (percentErrors === 0):
              break;
            
            case (percentErrors >= percentErrorsTiers[1]):
              bonusWrongAnswers = bonusWrong[2]
              teams[key].score = teams[key].score + bonusWrong[2]
              break;
            
            default:
              break;
          }
        }

        if(bonusWrongAnswers > 0) {
          answers.forEach(answer => {
            if(answer.teamName === key && answer.questionID === i) {answer.bonusWrongAnswers = bonusWrongAnswers}
          })
        }
      }
    }
  }

  // function getScores() {
  //   var incorrectAnswers = 0
  //   var smallestScore = 10000
  //   for(const key in teams) {
  //     teams[key].score = 0
  //   }
  
  //   for(let i = 1; i <= questions.length; i++) {
  //     incorrectAnswers = 0
  //     smallestScore = 10000
  //     answers.forEach(answer => {
  //       if(answer.questionID === i) {
  //         if(answer.correct === 1) {
  //           teams[answer.teamName].score = teams[answer.teamName].score + questions[answer.questionID-1].points
  //         } else if(answer.correct === 0 && questions[answer.questionID-1].speed === true) {
  //           teams[answer.teamName].score = teams[answer.teamName].score - questions[answer.questionID-1].points
  //           incorrectAnswers = incorrectAnswers + 1
  //         }
  
  //         if(teams[answer.teamName].score < smallestScore) {
  //           smallestScore = teams[answer.teamName].score
  //         }
  
  //         teams[answer.teamName].score = teams[answer.teamName].score + answer.bonus
  //       }
  //     })
  
  //     //To give points to the last teams
  //     if(incorrectAnswers > 0 && negativePoints) {
  //       for(const key in teams) {
  //         if(teams[key].score === smallestScore) {
  //           teams[key].score = teams[key].score + Math.trunc((incorrectAnswers + 1) / 2)
  //         }
  //       }
  //     }
  //   }
  // }

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