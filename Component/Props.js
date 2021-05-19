import React from 'react';
import PropTypes from 'prop-types';

class Props extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { message: "Welcome", name: "Athesh" }
        console.log(this.props);
    }


    render() {
        return <h1>Hello ! {this.props.name}</h1>
    }

}

Props.defaultProps = { name: "Vijay" };
Props.propTypes = {
    name: PropTypes.string
    // name : PropTypes.arr
    // name : PropTypes.number
    // name : PropTypes.bool
    // name : PropTypes.object
    // name : PropTypes.any
    // name : PropTypes.func
}

export default Props;



// Props in React js

// class Parent extends Component {

//   render() {
//     return <h1> Learn React Js from {this.props.material} </h1>
//   }
// }
// class Child extends Component {

//   render() {
//     const mati = { material: "Docs", intern: "Trainer" }
//     return <Parent var={mati}> </Parent>
//   }
// }

// Parent.defaultProps = { material: "Docs", intern: "Developer" }

// ReactDOM.render(<Child material="Video" />, document.getElementById('root'));