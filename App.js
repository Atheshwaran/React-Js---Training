// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LifeCycle from './Component/Lifecycle';
import PropsExample from './Component/Props';
import Derived from './Component/Derived';
import Task1 from './Component/Task1';
import Task2 from './Component/Task2';
import LoginControl from './Component/LoginControl';
import Purecomponent from './Component/Purecomponent';
import Reactfragments from './Component/Reactfragments';
import PresentationalComponent from './Component/PresentationalComponent';
import Task3 from './Component/Task3'


function App() {

    return <div>
        <LifeCycle />  <br /> <hr />
        <PropsExample name="Athesh" />  <br /> <hr />
        <Derived />  <br /> <hr />
        <Task1 /> <br /> <hr />
        <Task2 /> <br /> <hr />
        <LoginControl /> <br /> <hr />
        <Purecomponent/> <br /> <hr />
        <PresentationalComponent /> <br /> <hr />
        <Reactfragments /> <br /> <hr />
        <Task3 />
    </div>
}

export default App;
