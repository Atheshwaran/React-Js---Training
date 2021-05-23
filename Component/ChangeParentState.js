/* 

Task 2 :- 1) Change parent state from child component using button in child component.
          2) change parent state from child component passing function argument values.

*/


import React from 'react';
import ChangeParentStateChild from './ChangeParentStateChild';

class ChangeParentState extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }

    increaser = (num) => this.setState({ counter: this.state.counter + num });

    decreaser = (num) => this.setState({ counter: this.state.counter - num });


    render() {

        return <div>
            <ChangeParentStateChild data={this.state.counter} increase={this.increaser} decrease={this.decreaser} />
            <ChangeParentStateChild data={this.state.counter} increase={this.increaser} decrease={this.decreaser} />
        </div>

    }
}

export default ChangeParentState;