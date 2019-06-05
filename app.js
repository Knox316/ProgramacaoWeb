const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const cron = require('node-cron');
const logger = require('morgan');


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
require('dotenv').config();
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET,
  cookie: {
    maxAge: 60000
  },
  resave: false,
  saveUninitialized: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

if (!isProduction) {
  app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect('mongodb://localhost/mydb');
mongoose.set('debug', true);

var indexRouter = require('./src/api/routes/index');
var usersRouter = require('./src/api/routes/users');
var issuesRouter = require('./src/api/routes/issues');
var emailRouter = require('./src/api/routes/email');

//models and routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/issues', issuesRouter);
app.use('/email', emailRouter);

/*JWT*/
require('./src/api/jwtAuth/models/Users');
require('./src/api/jwtAuth/config/passport');
app.use(require('./src/api/jwtAuth/routes'));
//http://localhost:3000/api/users
/**
 * {
  "user": {
    "email": "test@test",
    "password": "test"
  }
}
 */




//Error handlers & middlewares
if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

cron.schedule('* * * * *', () => {
  console.log("---------------------");
  console.log("Running Cron Job");
  console.log("running a task every minute");
  console.log(process.env.SECRET);
  console.log(process.env.NODE_ENV);
  // const users = request('https://redmine-mock-api.herokuapp.com/api/v1/users', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     //  console.log(users.data);
  //     console.log('oi');
  //     //https://www.npmjs.com/package/cron
  //     //https://www.npmjs.com/search?q=node-cron
  //     //https://www.npmjs.com/package/mongoose-cron
  //     //https://stackoverflow.com/questions/44917031/update-multiple-documents-with-mongoose-using-node-cron

  //     //Objetivo backend
  //     //Como diz no enunciado do trabalho, de 5 em 5min
  //     //Fazer uma chamada a issues e users
  //     //e guardar a informação em base de dados sem ser necessário chamar nenhum endpoint
  //     //verificar se há alguma data já existente
  //     //se existe, então atualiza tudo
  //     //se não existe, então insere
})
// })
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;