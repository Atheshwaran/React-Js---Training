import React from 'react';
import PropTypes from 'prop-types';

class PresentationalComponent extends React.Component {

    constructor() {
        super();
        this.state = { message: "Athesh" }
    }

    render() {
        return <Child message={this.state.message} />
    }
}

function Child(props) {  // Presentational Component
    return <h1>Hello ! {props.message}</h1>
}


Child.defaultProps = { message: "String" };
Child.propTypes = {
    message: PropTypes.string.isRequired
}

export default PresentationalComponent;