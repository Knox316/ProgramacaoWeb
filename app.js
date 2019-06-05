var cors = require('cors');
var mongoose = require('mongoose');
var expressGraphQL = require('express-graphql');
var bodyParser = require('body-parser');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/api/routes/index');
var usersRouter = require('./src/api/routes/users');
var issuesRouter = require('./src/api/routes/issues');
var emailRouter = require('./src/api/routes/email');
var loginRouter = require('./src/api/routes/login');
var issuesUser = require('./src/api/routes/issuesUser');

require('dotenv').config();

var app = express();

app.use(
  cors(),
  bodyParser.json()
)
app.use(
  "/graphql",
  expressGraphQL({
    schema: {},
    rootValue: {},
    graphiql: true
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/issues', issuesRouter);
app.use('/email', emailRouter);
app.use('/login', loginRouter);
app.use('/issuesUser', issuesUser);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //mongo connection
  const port = process.env.PORT || 5000;
  const uri = `mongodb+srv://${process.env.DB_USER}:<${process.env.DB_PASS}>@cluster0-q0j88.mongodb.net/test?retryWrites=true&w=majority`
  //const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds135852.mlab.com:35852/mern-graphql-jwt`;
  mongoose.connect(uri, {
    useNewUrlParser: true
  })
    .then(() => {
      app.listen(port, () => console.log(`Server is listening on port: ${port}`));
    })
    .catch(err => {
      console.log(err);
    })

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;