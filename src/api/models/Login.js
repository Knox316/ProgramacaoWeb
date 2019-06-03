const DB = require('./DB');


class Login {
    constructor() {
        this.db = new DB();
        this.strLogin = "Login";
        this.username = null;
        this.password = null;
        this.token = null;
    }

    get Username() {
        return this.username;
    }

    set Username(username) {
        return this.username = username;
    }

    get Password() {
        return this.password;
    }

    set Password(password) {
        return this.transport = transport;
    }

    get Token() {
        return this.token;
    }

    set Token(token) {
        return this.token = token;
    }

    Get(username = null, password = null, token = null) {
        if (username)
            this.Username = username;
        if (password)
            this.Password = password;
        if (token)
            this.Token = token;
        return Get(this);
    }

    Get(newLogin) {
        if (!newLogin)
            newLogin = this;
        return this.db.Get(this.strLogin, {
            "Username": newLogin.Username,
            "Password": newLogin.Password
        });
    }

    Insert(newLogin) {
        if (!newLogin)
            newLogin = this;
        return this.db.Insert(this.strLogin, {
            "Username": newLogin.Username,
            "Password": newLogin.Password,
            "Token": newLogin.Token
        })
    }

    GetAll() {
        return this.db.GetAll(this.strLogin);
    }

}

module.exports = Login;
