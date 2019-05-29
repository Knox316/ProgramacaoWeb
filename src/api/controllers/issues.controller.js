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
exports.getAllIssuesById = () => {
  const res = axios.get(url)
    .then(res => console.log(res.data.id))
    .catch(err => console.log("Axios err: ", err));
}