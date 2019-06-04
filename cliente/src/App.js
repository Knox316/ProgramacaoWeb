import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import withAuth from './components/Login/withAuth';
import Home from './components/Login/Home';
import Secret from './components/Login/Secret';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
