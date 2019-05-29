var axios = require("axios");
const url = "https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00";


exports.getAllIssues = async (req, res) => {
    try {
      const { data } = await axios.get(url)
      res.json(data)
    } catch (err) {
      console.error('Axios Error:', err)
    }
  }


//corrigir
exports.getAllIssuesById = async (req, res) => {
    try {
      const { data } = await axios.get(url)
      res.json(data.id)
    } catch (err) {
      console.error('Axios Error:', err)
    }
  }