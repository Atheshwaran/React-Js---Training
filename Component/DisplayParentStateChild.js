import React from 'react';
import PropTypes from 'prop-types';

class DisplayParentStateChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Athesh" }
    }

    render() {
        return <h1>Hello ! {this.props.data}</h1>
    }

}

DisplayParentStateChild.defaultProps = { data: 0 };

DisplayParentStateChild.propTypes = {
    data: PropTypes.number.isRequired
}



export default DisplayParentStateChild;