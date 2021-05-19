// Conditional Rendering

import React from 'react';
import Greetings from './Greetings'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.loginClick = this.loginClick.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
    this.state = { isEmployee: false };
  }

  loginClick() {
    this.setState({ isEmployee: true });
  }

  logoutClick() {
    this.setState({ isEmployee: false });
  }

  render() {
    const employee = this.state.isEmployee;
    let button;
    if (employee) {
      button = <LogoutButton onClick={this.logoutClick} />;
    } else {
      button = <LoginButton onClick={this.loginClick} />;
    }

    return (
      <div>
        <Greetings isCalibraint={employee} />
        {button}
      </div>
    );
  }
}


export default LoginControl;