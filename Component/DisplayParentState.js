
//  Task 1 :- Change the state of parent and display the parent state using child props

import React from 'react';
import DisplayParentStateChild from './DisplayParentStateChild';


class DisplayParentState extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 0
        }
    }

    increaser = () => { this.setState({ data: this.state.data + 1 }) }

    render() {
        return (<div>
            <h1> Count :- {this.state.data} </h1>
            <DisplayParentStateChild data={this.state.data} />
            <button onClick={this.increaser} > Counter </button>
        </div>)
    }

}

export default DisplayParentState;