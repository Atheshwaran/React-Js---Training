import React from 'react';
import PropTypes from 'prop-types';

class Task2child extends React.Component {

    render() {
        return (<div>
            <h1> Counter :- {this.props.data} </h1>
            <button onClick={() => this.props.increase(10)}> Counter +</button>
            <button onClick={() => this.props.decrease(5)}> Counter +</button>
        </div>
        )
    }
}


Task2child.defaultProps = { data: 0 };
Task2child.propTypes = {
    data: PropTypes.number,
    increase: PropTypes.func.isRequired
}

export default Task2child;