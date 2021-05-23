import React from 'react';
import PropTypes from 'prop-types';


class LiftingStateUpChild1 extends React.Component {
    constructor(props) {
        super(props)
    }

    addressFun = (e) => {
        this.props.Address(e.target.value)
    }

    cityFun = (e) => {
        this.props.City(e.target.value)
    }

    stateFun = (e) => {
        this.props.State(e.target.value)
    }

    pincodeFun = (e) => {
        this.props.Pincode(e.target.value)
    }

    render() {
        return (<>
            <h1> Temporary Address :- </h1>
            Address : <input value={this.props.address} onChange={this.addressFun} />
            City :  <input value={this.props.city} onChange={this.cityFun} />
            State :  <input value={this.props.state} onChange={this.stateFun} />
            Pincode :  <input value={this.props.pincode} onChange={this.pincodeFun} />
            <br />
            <p>Is above temporary address is also your Permanent address ?</p> <br />
            <button onClick={this.props.Status}>Yes</button>
        </>)
    }
}

LiftingStateUpChild1.defaultProps = { address: "", city: "", state: "", pincode: "", status: false };

LiftingStateUpChild1.propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    pincode: PropTypes.string,
    status: PropTypes.bool,
    Address: PropTypes.func.isRequired,
    City: PropTypes.func.isRequired,
    State: PropTypes.func.isRequired,
    Pincode: PropTypes.func.isRequired,
    Status: PropTypes.func.isRequired
}

export default LiftingStateUpChild1;