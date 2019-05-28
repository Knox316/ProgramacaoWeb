var axios = require("axios");
const url = "https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain";

exports.getUsers = () => {
  const res = axios.get(url).then(res => console.log(res.data)).catch(err => console.log("Axios err: ", err));

}

//corrigir
exports.getUsersById = () => {
  const res = axios.get(url).then(res => console.log(res.data.id)).catch(err => console.log("Axios err: ", err));
}