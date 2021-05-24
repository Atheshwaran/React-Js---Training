import React from 'react';
import PropTypes from 'prop-types';


class ChangeParentStateChild extends React.Component {

    render() {
        return (<div>
            <h1> Counter :- {this.props.data} </h1>
            <button onClick={() => this.props.increase(10)}> Counter +</button>
            <button onClick={() => this.props.decrease(5)}> Counter -</button>
        </div>
        )
    }
}


ChangeParentStateChild.defaultProps = { data: 0 };
ChangeParentStateChild.propTypes = {
    data: PropTypes.number,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired,
}

export default ChangeParentStateChild;