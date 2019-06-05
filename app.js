var cors = require('cors');
var mongoose = require('mongoose');
var expressGraphQL = require('express-graphql');
var bodyParser = require('body-parser');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cron = require('node-cron');
var request = require('request');



var withAuth = require('./src/api/jwtAuth/middleware/middleware');
var indexRouter = require('./src/api/routes/index');
var usersRouter = require('./src/api/routes/users');
var issuesRouter = require('./src/api/routes/issues');
var emailRouter = require('./src/api/routes/email');
var loginRouter = require('./src/api/jwtAuth/routes/login');
var authRouter = require('./src/api/jwtAuth/routes/auth');


var app = express();
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

require('dotenv').config();
console.log(process.env.SECRET);

app.use(
  cors(),
  bodyParser.json()
)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/issues', issuesRouter);
app.use('/email', emailRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);

const mongo_uri = 'mongodb://localhost/mydb';
mongoose.connect(mongo_uri, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

cron.schedule('* * * * *', () => {
  console.log("---------------------");
  console.log("Running Cron Job");
  console.log("running a task every minute");
  const users = request('https://redmine-mock-api.herokuapp.com/api/v1/users', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //  console.log(users.data);
      console.log('oi');
      //https://www.npmjs.com/package/cron
      //https://www.npmjs.com/search?q=node-cron
      //https://www.npmjs.com/package/mongoose-cron
      //https://stackoverflow.com/questions/44917031/update-multiple-documents-with-mongoose-using-node-cron

      //Objetivo backend
      //Como diz no enunciado do trabalho, de 5 em 5min
      //Fazer uma chamada a issues e users
      //e guardar a informação em base de dados sem ser necessário chamar nenhum endpoint
      //verificar se há alguma data já existente
      //se existe, então atualiza tudo
      //se não existe, então insere
    }
  })




});

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



//jwt
app.get('http://localhost:3000/api/secret', withAuth, function (req, res) {
  res.send('The password is ');
});

app.get('http://localhost:3000/checkToken', withAuth, function (req, res) {
  console.log(withAuth);
  res.sendStatus(200);
});

module.exports = app;