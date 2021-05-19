import React from 'react';


class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = { message: "Welcome", name: "Athesh" }

    }

    // Depricated

    componentWillMount() {   // runs before render
        //alert("Welcome! Let us learn React LIFE CYCLE. \n I am 'componentWillMount'.")
        console.log("will Mount called", this.state.message);
    }

    static getDerivedStateFromProps() {  // runs before render and before update 
        console.log("Derived Props");
        return null;
    }

    render() {
        return <React.Fragment>
            {<h1>{this.state.message} {this.state.name}</h1>}
            <br />
            <button type='button' onClick={this.changeValue}>Click Me</button>
            <button type='button' onClick={this.delteHeader}>Un-Mount</button>
            {console.log("Render called")}
        </React.Fragment>
    }

    changeValue = () => this.setState({ message: "Learning... React Life-Cycle" });
    delteHeader = () => this.setState({ message: "", name: "" });

    componentDidMount() {   // runs after render
        // setTimeout(() => {
        console.log("Did mount called", this.state.message);
        this.setState({ message: "Thank you" })
        //},5000)

    }

    // Depricated

    componentWillUpdate() {   // // runs before any "Re - Render" 
        // alert("Do you want to update any new value?");
        console.log("will update called", this.state.message);
    }

    getSnapshotBeforeUpdate() // runs after update
    {
        console.log("Snapsot called");
        return null;
    }

    componentDidUpdate() {   // runs after "Re - Render"
        // document.getElementById("myDiv").innerHTML = "New value updated successfully :- " + this.state.message;
        console.log("Did update called", this.state.message);
    }

    shouldComponentUpdate = () => true;   // shouldComponentUpdate ? (true) -> Continues its working flow as normal : (false) -> Stops the "Re - Render".

    componentWillUnmount = () => console.log("Header Deleted by 'UNMOUNT'.");

}


export default Lifecycle;