var express = require("express");
var axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});

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
    console.log(res.data[0].id)

  } catch (error) {
    console.log(error);
  }
}


//

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