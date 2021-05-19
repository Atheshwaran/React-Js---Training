import React from 'react';
import PropTypes from 'prop-types'
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greetings(props) {
    const isEmployee = props.isCalibraint;
    if (isEmployee) {
        return <UserGreeting />;
    } else
        return <GuestGreeting />;
}

Greetings.defaultProps = { isCalibraint: false }

Greetings.propTypes = {
    isCalibraint: PropTypes.bool
}
export default Greetings;