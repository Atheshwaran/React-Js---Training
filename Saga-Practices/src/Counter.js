import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
const Counter = () => {
    const state = useSelector( (state) => ({...state}));
    const dipatch = useDispatch();
    return ( <>
        
        <h1> Counter : {state.app.value} </h1>
        <button onClick = {() => dipatch({type : "Increment"})}> + </button>
        <button onClick = {() => dipatch({type : "Decrement"})}> - </button>
        </>
    )
}

export default Counter;