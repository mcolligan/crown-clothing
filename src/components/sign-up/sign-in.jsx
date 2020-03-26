import React from 'react';

import './sign-in.scss';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" value={this.state.email} required/>
          <label>Email</label>
          <input name="password" type="password" value={this.state.password} required/>
          <label>Passowrd</label>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}