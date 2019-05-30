var axios = require("axios");
const baseURL = "https://redmine-mock-api.herokuapp.com/api/v1/users";



exports.getUsers = async (req, res) => {
    //debug('getUsers')
    try {
        var users = await axios.get(baseURL + "?forceMail=email@address.domain")
        res.json(users.data)
    } catch (err) {
        console.error('Axios Error:', err)
    }
}


/** GET USERS BY ID */
exports.getUsersById = async (req, res) => {
    try {
        var user = await axios.get(baseURL + "/" + req.params.id)
        console.log(user.data);
        res.json(user.data);

    } catch (err) {
        console.error('Axios Error:', err)
    }
}

