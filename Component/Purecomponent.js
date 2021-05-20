import React, { PureComponent } from 'react';

class Purecomponent extends PureComponent {

    constructor() {
        super();
        this.state = { count: 0 }
    }

    render() {
        console.log("Render", this.state.count);
        return <button onClick={() => this.setState({ count: 10 })}> Click me</button>
    }
}

export default Purecomponent;