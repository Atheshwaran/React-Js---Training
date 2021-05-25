import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import LifeCycle from './Lifecycle';
import Props from './Props';
import Derived from './Derived';
import DisplayParentState from './DisplayParentState';
import ChangeParentState from './ChangeParentState';
import ConditionalRendering from './ConditionalRendering';
import Purecomponent from './Purecomponent';
import PresentationalComponent from './PresentationalComponent';
import Reactfragments from './Reactfragments';
import ListAndKeys from './ListAndKeys';
import Button from './Button';
import LiftingStateUp from './LiftingStateUp';
import ForwardRef from './ForwardRef';
import HoverCounter from './HoverCounter';
import ClickCounter from './ClickCounter';
import RefsAndDom from './RefsAndDom';
import NotFound from './NotFound';


function routing() {

    return (<Router>
        <div>
            <ul>
                <li> <NavLink to="/" exact activeStyle={{ color: 'Green' }} > LifeCycle </NavLink>  </li>
                <li> <NavLink to='/props' exact activeStyle={{ color: 'Green' }} > Props </NavLink>  </li>
                <li> <NavLink to='/derived' exact activeStyle={{ color: 'Green' }} > Derived </NavLink> </li>
                <li> <NavLink to='/displayparentstate' exact activeStyle={{ color: 'Green' }} > DisplayParentState </NavLink> </li>
                <li> <NavLink to='/changeparentstate' exact activeStyle={{ color: 'Green' }} > ChangeParentState </NavLink> </li>
                <li> <NavLink to='/conditional-rendering' exact activeStyle={{ color: 'Green' }} > ConditionalRendering </NavLink> </li>
                <li> <NavLink to='/purecomponent' exact activeStyle={{ color: 'Green' }} > Purecomponent </NavLink> </li>
                <li> <NavLink to='/presentationalcomponent' exact activeStyle={{ color: 'Green' }} > PresentationalComponent </NavLink> </li>
                <li> <NavLink to='/reactfragments' exact activeStyle={{ color: 'Green' }} > Reactfragments </NavLink> </li>
                <li> <NavLink to='/listandkeys' exact activeStyle={{ color: 'Green' }} > ListAndKeys </NavLink> </li>
                <li> <NavLink to='/button' exact activeStyle={{ color: 'Green' }} > Button </NavLink> </li>
                <li> <NavLink to='/liftingstateup' exact activeStyle={{ color: 'Green' }} > LiftingStateUp </NavLink> </li>
                <li> <NavLink to='/forwardref' exact activeStyle={{ color: 'Green' }} > ForwardRef </NavLink> </li>
                <li> <NavLink to='/hovercounter' exact activeStyle={{ color: 'Green' }} > HoverCounter </NavLink> </li>
                <li> <NavLink to='/clickcounter' exact activeStyle={{ color: 'Green' }} > ClickCounter </NavLink> </li>
                <li> <NavLink to='/refsanddom' exact activeStyle={{ color: 'Green' }} > RefsAndDom </NavLink> </li>
            </ul>
            <Switch>
            <Route exact path="/" component={LifeCycle} />
            <Route path="/props" component={Props} />
            <Route path="/derived" component={Derived} />
            <Route path="/displayparentstate" component={DisplayParentState} />
            <Route path="/changeparentstate" component={ChangeParentState} />
            <Route path="/conditional-rendering" component={ConditionalRendering} />
            <Route path="/purecomponent" component={Purecomponent} />
            <Route path="/presentationalcomponent" component={PresentationalComponent} />
            <Route path="/reactfragments" component={Reactfragments} />
            <Route path="/listandkeys" component={ListAndKeys} />
            <Route path="/button" component={Button} />
            <Route path="/Liftingstateup" component={LiftingStateUp} />
            <Route path="/forwardref" component={ForwardRef} />
            <Route path="/hovercounter" component={HoverCounter} />
            <Route path="/clickcounter" component={ClickCounter} />
            <Route path="/refsanddom" component={RefsAndDom} />
            <Route component={NotFound} />
            </Switch>
        </div>
    </Router >)
}

export default routing;
