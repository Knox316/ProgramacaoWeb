var axios = require("axios");
const url = "https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain";

exports.getUsers = async() => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data)  
    } catch (error) {
      console.log(error);
    }
  }

  //corrigir
  exports.getUsersById = async() => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data.id)  
    } catch (error) {
      console.log(error);
    }
  }