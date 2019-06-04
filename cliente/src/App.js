import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import withAuth from './components/Login/withAuth';
import Home from './components/Login/Home';
import Secret from './components/Login/Secret';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    
    return (
      
      <div>
        <ul>
          <BrowserRouter>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/secret">Secret</Link></li>
            <li><Link to="/login">Login</Link></li>
          </BrowserRouter>
        </ul>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/secret" component={withAuth(Secret)} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
