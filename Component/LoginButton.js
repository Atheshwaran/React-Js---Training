import React from 'react';
import PropTypes from 'prop-types';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default LoginButton;