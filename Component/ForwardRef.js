import React from "react";
import ForwardRefChild from "./ForwardRefChild";

class ForwardRef extends React.Component {

    constructor() {
        super();
        this.inputRef = React.createRef();   // Creating new references to inputRef
    }

    handleClick = () => {
        this.inputRef.current.focus();
    };

    render() {
        return (
            <div style={{ border: "1px solid red", width: "400px" }}>
                <b>Parent Component</b>
                <br />
                <br />
                <ForwardRefChild ref={this.inputRef} />
                <button style={{ margin: "8px" }} onClick={this.handleClick}> Click </button>
            </div>
        );
    }
}

export default ForwardRef;