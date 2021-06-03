import React, { useState } from 'react';
import { stateA } from '../Actions/Score';
import { useSelector, useDispatch } from 'react-redux';
import TeamA from './TeamA';

function Cricket() {

    const [over, updateOver] = useState(3);
    const dispatch = useDispatch();
    const [statea, setValue] = useState(
        {
            player1: { id: 1, runs: 0, status: true },
            player2: { id: 2, runs: 0, status: true }
        })

    dispatch(stateA(statea));

    const status = false;

    const score = useSelector((state) => state.score);
    const wicket = useSelector((state) => state.wicket);
    //  const dispatch = useDispatch();

    const OverFunc = (e) => updateOver(e.target.value);
    console.log(over);

    const TeamAFunc = () => {
        let arr = [];
        for (let i = 0; i < over; i++) {
            arr.push((<><h1> Team a - Batting {i} </h1>
                <TeamA state={statea} change={setValue} /> </>)
            )
        }
        return arr;
    }

    const TeamBFunc = () => {
        if (status) {
            for (let i = 0; i < over; i++) {
                return (<>
                    <h1> Team b{i
                    } - Batting </h1>
                    <TeamA over={over} />
                </>)
            }
        }
        else
            return null;
    }

    return (<>

        <h1> Score : {score}       ||     Wickets : {wicket}/10 </h1>
        Enter number of Overs : <input type='text' value={over} onChange={OverFunc} />
        <h1> Team A - Batting </h1>

        <div>{
            TeamAFunc().map((overs, index) => {
                return (<li key={index}> {overs}</li>)
            })
        }</div>

        <div> <TeamBFunc /></div>
    </>
    )

}

export default Cricket;