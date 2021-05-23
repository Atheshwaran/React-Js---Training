import React from 'react';
import LiftingStateUpChild1 from './LiftingStateUpChild1';
import LiftingStateUpChild2 from './LiftingStateUpChild2';

class LiftingStateUp extends React.Component {
    constructor() {
        super()
        this.state = { address: "", city: "", state: "", pincode: "", status: false }
    }

    addressFunc = (address) => {
        this.setState({ address: address })
    }

    cityFunc = (city) => {
        this.setState({ city: city })
    }

    stateFunc = (state) => {
        this.setState({ state: state })
    }

    pincodeFunc = (pin) => {
        this.setState({ pincode: pin })
    }

    statusFunc = () => {
        this.setState({ status: !(this.state.status) })
        console.log(this.state.status);
    }

    render() {
        let address = this.state.address;
        let city = this.state.city;
        let state = this.state.state;
        let pincode = this.state.pincode;


        return (<>
            <LiftingStateUpChild1

                address={address}
                city={city}
                state={state}
                pincode={pincode}
                status={this.state.status}

                Address={this.addressFunc}
                City={this.cityFunc}
                State={this.stateFunc}
                Pincode={this.pincodeFunc}
                Status={this.statusFunc}
            />


            <LiftingStateUpChild2

                address={address}
                city={city}
                state={state}
                pincode={pincode}
                status={this.state.status}

                Address={this.addressFunc}
                City={this.cityFunc}
                State={this.stateFunc}
                Pincode={this.pincodeFunc}


            />
        </>
        )
    }
}


export default LiftingStateUp;