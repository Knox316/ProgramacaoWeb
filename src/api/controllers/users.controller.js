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
exports.getUsersById = () => {
  const res = axios.get(url).then(res => console.log(res.data.id)).catch(err => console.log("Axios err: ", err));
}