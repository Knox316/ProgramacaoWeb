var axios = require("axios");
const url = "https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00";


exports.getAllIssues = () => {
  const res = axios.get(url).then(res => console.log(res.data)).catch(err => console.log("Axios err: ", err));
}


//corrigir
exports.getAllIssuesById = () => {
  const res = axios.get(url).then(res => console.log(res.data.id)).catch(err => console.log("Axios err: ", err));
}