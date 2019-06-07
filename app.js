const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');
const cron = require('node-cron');
const logger = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');
const issueService = require('./src/api/fetchServicesBD/issues');
const issueCreate = require('./src/api/controllers/issuesController');
const usersService = require('./src/api/fetchServicesBD/users');
const usersCreate = require('./src/api/controllers/usersController');
const db = require('./src/api/shared/db');
// Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';
const moment = require('moment');

/**
 * MONGOOSE
 */
// Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
// Configure Mongoose
mongoose.connect('mongodb://localhost/mydb', {
  useNewUrlParser: true,
}).then(
  (res) => {
    console.log('Successfully connected to the database.');
  },
).catch(() => {
  console.log('Connection to database failed.');
});

mongoose.set('debug', true);

require('./src/api/models/Email');


// ROUTE
const indexRouter = require('./src/api/routes/index');
const usersRouter = require('./src/api/routes/users');
const issuesRouter = require('./src/api/routes/issues');
const emailRouter = require('./src/api/routes/email');
// const issuesUserRouter = require('./src/api/routes/issuesUser');
/* JWT */
require('./src/api/jwtAuth/models/Users');
require('./src/api/jwtAuth/config/passport');
// Initiate our app
const app = express();

// SWAGGER
// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};
// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ['./**/routes/*.js', 'routes.js'], // pass all in array
};
// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Configure our app
require('dotenv').config();

app.use(cors());
app.use(require('morgan')('dev'));

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET,
  cookie: {
    maxAge: 60000,
  },
  resave: false,
  saveUninitialized: false,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));

if (!isProduction) {
  app.use(errorHandler());
}

// models and routes
/**
 * @swagger
 * /:
 *   get:
 *     tags:
 *       - index
 *     description: goes to index
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: index of the server
 *         schema:
 *           $ref: '#/definitions/users'
 */

// ROUTE
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/issues', issuesRouter);
app.use('/email', emailRouter);
// app.use('/issuesUser', issuesUserRouter);

// JWT
app.use(require('./src/api/jwtAuth/routes'));
// http://localhost:3000/api/users
/**
 * {
  "user": {
    "email": "test@test",
    "password": "test"
  }
}
 */




// Error handlers & middlewares
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

cron.schedule('* * * * *', async () => {
  console.log('---------------------');
  console.log('Running Cron Job');
  console.log('running a task every minute');
  console.log(process.env.SECRET);
  console.log(process.env.NODE_ENV);

  const date = moment().subtract(1, 'days').toISOString(); // or format() - see below

  const resIssue = await issueService.getIssueByDate(date);
  issueCreate.createIssue(resIssue);
  const resUser = await usersService.getForce();
  // console.log(resUser);
  usersCreate.createUser(resUser);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;