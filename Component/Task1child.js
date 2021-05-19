import React from 'react';
import PropTypes from 'prop-types';

class Task1child extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Athesh" }
    }


    render() {
        return <h1>Hello ! {this.props.data}</h1>
    }

}

Task1child.defaultProps = { data: 0 };
Task1child.propTypes = {
    data: PropTypes.number
}

export default Task1child;