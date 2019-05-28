var axios = require("axios");


exports.getUsers = async(req, res, next) => {
    try {
      const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain');
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  //corrigir
  exports.getUsersById = async(req, res, next) => {
    try {
      const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/users?forceMail=email@address.domain');
      //console.log(res.data)
      console.log(res.data[0].id);
    } catch (error) {
      console.log(error);
    }
  }