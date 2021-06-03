import React, { useEffect, useState } from 'react';
import { increment, stateA, wicket } from '../Actions/Score';
import { useDispatch } from 'react-redux';

function TeamA(props) {

    const dispatch = useDispatch();
    const state = props.state;
    const setValue = props.change;
    let playerName = "";
    let run = "";

    dispatch(stateA(state));


    let playerNameFunc = (e) => {
        playerName = e.target.value;
    }

    let scoreFunc = (e) => {
        run = e.target.value;
    }

    let updateVal = () => {


        switch (playerName) {

            case "player1": {
                if (run > 0) {
                    if (state.player1.status) {
                        setValue((prevState) => ({
                            player1: { ...prevState.player1, runs: Number(prevState.player1.runs) + Number(run) }
                        }))
                        // { player1: { runs: run } });
                        dispatch(increment(run));
                        console.log("player1 switch: ", state.player1.runs);
                    }
                    else
                        console.log("Player1 is already OUT !!!");
                }
                else {
                    if (state.player1.status) {
                        setValue((prevState) => ({
                            player1: { ...prevState.player1, status: false }
                        }))
                        dispatch(wicket());
                        console.log("player1 status: ", state.player1.status);
                    }
                    else
                        console.log("Player1 is already OUT !!!");
                }
                break;
            }

            case "player2": {
                if (run > 0) {
                    setValue((prevState) => ({
                        player2: { ...prevState.player2, runs: Number(prevState.player2.runs) + Number(run) }
                    }))
                    dispatch(increment(run));
                    console.log("player2 switch: ", state.player2.runs);
                }
                else {
                    setValue((prevState) => ({
                        player2: { ...prevState.player2, status: false }
                    }))
                    dispatch(wicket());
                    console.log("player2 status: ", state.player2.status);
                }
                break;
            }

            default: return "Enter player name correctly";

        }
    }

    useEffect(() => {
        console.log(state);
    }, [state]);

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            if (run > 0) {
                console.log(updateVal());
                // dispatch(increment(run))
            }
            else {
                console.log(updateVal());
                // dispatch(wicket())
            }
            // console.log('value', e.target.value);
            // console.log("player1 : ", state.player1.runs);
            // put the login here
        }
    }


    return (<>
        Ball 1: <input type='dropdown' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} />
        Ball 2: <input type='text' onKeyDown={keyPress} placeholder='Enter player name' onChange={playerNameFunc} /> <input type='text' placeholder="Enter runs scored" onKeyDown={keyPress} onChange={scoreFunc} />
    </>)
}



export default TeamA;