import React from 'react';
import PropTypes from 'prop-types';


function PresentationalComponentChild(props) {  // Presentational Component
    return <h1>Hello ! {props.message}</h1>
}


PresentationalComponentChild.defaultProps = { message: "String" };

PresentationalComponentChild.propTypes = {
    message: PropTypes.string.isRequired
}

export default PresentationalComponentChild;