var axios = require("axios");
const url = "https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00";

exports.getAllIssues = async() => {
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data);
      return data
    } catch (error) {
      console.log(error);
    }
  }

  //corrigir
  exports.getAllIssuesById = async() => {
    try {
        const res = await axios.get(url);
        const data = res.data;
        console.log(data.id)  
  
    } catch (error) {
      console.log(error);
    }
  }