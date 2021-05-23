import React from 'react';
import PropTypes from 'prop-types';

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired
  }

export default LogoutButton;