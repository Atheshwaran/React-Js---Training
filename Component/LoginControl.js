// Conditional Rendering

import React from 'react';
import Greetings from './Greetings'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.loginClick = this.loginClick.bind(this);    // Binding 'this' to "this.loginClick"
    //  this.logoutClick = this.logoutClick.bind(this);
    this.state = { isEmployee: false };
  }

  loginClick() {   // In normal function 'this' reffers globally so, we need bind 'this' to a particular func then only we can access the 'this.setState" here. 
    this.setState({ isEmployee: true });
  }

  logoutClick = () => {    // In arrow function this is already bounded so here 'this' is founded and 'setState' is done 
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