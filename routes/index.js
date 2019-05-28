var express = require("express");
var axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

/* GET ALL USERS*/
router.get("/users", async (req, res, next) => {
  const users = await getUsers({
    data: req.data
  });
  res.json(users);
  //console.log(userId);
});

async function getUsers() {
  try {
    const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain');
    console.log(res.data)

  } catch (error) {
    console.log(error);
  }
}

/* GET USERS BY ID */
router.get("/users/:id", async (req, res, next) => {
  const userId = await getUsers({
    id: req.data
  });
  res.json(id);
  console.log(userId);

//falta mudar o data[0] hardcodded e continuar a partir aqui
router.get("/users/:id", async (req, res, next) => {
  const userId = await getUsers({
    id: req.id
  });
  res.json(userId);
  //console.log(userId);
});

async function getUsers() {
  try {
    const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain');
    //console.log(res.data)
    console.log(res.data[0].id)

  } catch (error) {
    console.log(error);
  }
}

/* GET ALL ISSUES */
router.get("/issues", async (req, res, next) => {
  const issueId = await getIssues({
    data: req.data
  });
  res.json(issueId);
  //console.log(userId);
});


async function getIssues() {
  try {
    const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00');
    console.log(res.data)

  } catch (error) {
    console.log(error);
  }
}

/* GET ALL ISSUES BY ID */
router.get("/issues/:id", async (req, res, next) => {
  const issueId = await getIssues({
    id: req.id
  });
  res.json(issueId);
  //console.log(userId);
});

//corrigir
//temos que entrar dentro de cada issue
//e só depois sacar o id
async function getIssues() {
  try {
    const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00');
    console.log(res.data.issues)

  } catch (error) {
    console.log(error);
  }
}


module.exports = router;