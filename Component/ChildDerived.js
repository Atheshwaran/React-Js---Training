import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildDerived extends Component {

    constructor() {
        super()
        this.state = {
            currentValue: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Result", props, state)
        return {
            currentValue: props.data * 5
        }
    }
    render() {
        return (
            <div>
                <h1>current Value{this.state.currentValue}</h1>
            </div>
        )
    }
}

ChildDerived.defaultProps = { name: "Athesh" };

ChildDerived.propTypes = {
    data: PropTypes.number,
    data: PropTypes.number.isRequired
}
export default ChildDerived