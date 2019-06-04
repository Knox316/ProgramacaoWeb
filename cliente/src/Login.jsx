import React, { Component } from 'react';
import './Login.css';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
  }

  render() {
    return (
      /* try wraper after that */
      <div className="container width">
        <div className=".col-md-6 .offset-md-3">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required />
            </div>
            <div className="form-group">
              <input type="password"
                class="form-control"
                id="examplePassword11"
                aria-describedby="passwordHelp"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleInputChange}
                required />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}