var axios = require("axios");


exports.getAllIssues = async(req, res, next) => {
    try {
      const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00');
      console.log(res.data.limit)  
      return res.data.limit
   
    } catch (error) {
      console.log(error);
    }
  }

  //corrigir
  exports.getAllIssuesById = async(req, res, next) => {
    try {
      const res = await axios.get('https://redmine-mock-api.herokuapp.com/api/v1/issues?after=2019-04-13T12:00');
      console.log(res.data.issues)
  
    } catch (error) {
      console.log(error);
    }
  }