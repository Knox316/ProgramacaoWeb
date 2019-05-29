var axios = require("axios");
const url = "https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain";

exports.getUsers = async (req, res) => {
    try {
      const { data } = await axios.get(url)
      res.json(data)
    } catch (err) {
      console.error('Axios Error:', err)
    }
  }

//corrigir
exports.getUsersById = async (req, res) => {
    try {
      const { data } = await axios.get(url)
      res.json(data.id)
    } catch (err) {
      console.error('Axios Error:', err)
    }
  }