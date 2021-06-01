import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLogged } from '../Actions/Action';


function Redux() {
    const counter = useSelector((state) => state.counter);
    const logged = useSelector((state) => state.login);
    const dispatch = useDispatch();

    let signin_status = "";
    let message = "";
    if (logged === false) {
        signin_status = "Sign-in";
        message = "Please Sign-in to proceed.....";
    }
    else {
        signin_status = "Sign-out";
        message = "Welocme Athesh";
    }
    return (<>

        <button onClick={() => dispatch(isLogged())}> {signin_status}</button>
        <h3> {message} </h3>
        <h1> Counter : {counter} </h1>
        <button onClick={() => dispatch(increment())} > + </button>
        <button onClick={() => dispatch(decrement())} > - </button>
    </>
    )
}

export default Redux;