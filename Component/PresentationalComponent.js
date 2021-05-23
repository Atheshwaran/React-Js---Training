import React from 'react';
import PresentationalComponentChild from './PresentationalComponentChild';

class PresentationalComponent extends React.Component {

    constructor() {
        super();
        this.state = { message: "Athesh" }
    }

    render() {
        return <PresentationalComponentChild message={this.state.message} />
    }
}

export default PresentationalComponent;