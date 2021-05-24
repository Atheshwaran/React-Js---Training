import React from 'react';
import PropTypes from 'prop-types';


function ButtonChild(props) {
    console.log(props);
    //console.log(props.children);
    return <>
        <button onClick={props.click}> button </button>
        <h1> {props.children}</h1>
    </>
}

ButtonChild.defaultProps = { name: "Athesh" };

ButtonChild.propTypes = {
    name: PropTypes.string,
    click: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired

}

export default ButtonChild;