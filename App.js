// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LifeCycle from './Component/Lifecycle';
import PropsExample from './Component/Props';
import Derived from './Component/Derived';
import Task1 from './Component/Task1';
import Task2 from './Component/Task2';
import LoginControl from './Component/LoginControl';


function App() {

    return <div>
        <LifeCycle />  <br /> <hr />
        <PropsExample name="Athesh" />  <br /> <hr />
        <Derived />  <br /> <hr />
        <Task1 /> <br /> <hr />
        <Task2 /> <br /> <hr />
        <LoginControl />
    </div>
}

export default App;
