import React from "react";

const ForwardRefChild = React.forwardRef((props, ref) => {

    class ForwardRefChild extends React.Component {

        render() {
            return (
                <div style={{ border: "1px solid green", width: "300px", }}>
                    Child Component
                    <br />
                Name: <input type="text" ref={ref} style={{ margin: "32px 0 32px 0" }} />
                </div>
            );
        }
    }
    return <ForwardRefChild />
})

export default ForwardRefChild;