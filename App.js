// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LifeCycle from './Component/Lifecycle';
import Props from './Component/Props';
import Derived from './Component/Derived';
import DisplayParentState from './Component/DisplayParentState';
import ChangeParentState from './Component/ChangeParentState';
import ConditionalRendering from './Component/ConditionalRendering';
import Purecomponent from './Component/Purecomponent';
import Reactfragments from './Component/Reactfragments';
import PresentationalComponent from './Component/PresentationalComponent';
import ListAndKeys from './Component/ListAndKeys';
import Button from './Component/Button';
import LiftingStateUp from './Component/LiftingStateUp';
import ForwardRef from './Component/ForwardRef';
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'


function App() {

    return <div>
        <LifeCycle />  <br /> <hr />
        <Props name="Athesh" />  <br /> <hr />
        <Derived />  <br /> <hr />
        <DisplayParentState /> <br /> <hr />
        <ChangeParentState /> <br /> <hr />
        <ConditionalRendering /> <br /> <hr />
        <Purecomponent /> <br /> <hr />
        <PresentationalComponent /> <br /> <hr />
        <Reactfragments /> <br /> <hr />
        <ListAndKeys /> <br /> <hr />
        <Button /> <br /> <hr />
        <LiftingStateUp /> <br /> <hr />
        <ForwardRef /> <br /> <hr />
        {/* <HoverCounter name='Athesh' />
        <ClickCounter name='Athesh' /> */}

    </div>
}

export default App;
