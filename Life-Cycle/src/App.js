// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LifeCycle from './Component/Lifecycle';
import PropsExample from './Component/Props';
import Derived from './Component/Derived';



// class App extends React.Component()
// {
//     constructor(){
//     //    super();
//     //    this.state = {count: 1}
//     }

function App() {
    // render(){
    return <div>
        <LifeCycle />
        <PropsExample name="Athesh" />
        <Derived></Derived>
    </div>
}

//}


export default App;
