import React, { useState } from 'react';
import { stateA, stateB, ballA, ballB, runsRateA , runsRateB } from '../Actions/Score';
import { useSelector, useDispatch } from 'react-redux';
import TeamA from './TeamA';
import TeamB from './TeamB';
import TeamAboard from './TeamAboard';
import TeamBboard from './TeamBboard';

function Cricket() {

    const [over, updateOver] = useState(1);
    const dispatch = useDispatch();
    const [statea, setValueA] = useState(
        {
            player1: { id: 1, runs: 0, status: true },
            player2: { id: 2, runs: 0, status: true },
            player3: { id: 3, runs: 0, status: true },
            player4: { id: 4, runs: 0, status: true },
            player5: { id: 5, runs: 0, status: true },
            player6: { id: 6, runs: 0, status: true },
            player7: { id: 7, runs: 0, status: true },
            player8: { id: 8, runs: 0, status: true },
            player9: { id: 9, runs: 0, status: true },
            player10: { id: 10, runs: 0, status: true }
        })

    const [stateb, setValueB] = useState(
        {
            player1: { id: 1, runs: 0, status: true },
            player2: { id: 2, runs: 0, status: true },
            player3: { id: 3, runs: 0, status: true },
            player4: { id: 4, runs: 0, status: true },
            player5: { id: 5, runs: 0, status: true },
            player6: { id: 6, runs: 0, status: true },
            player7: { id: 7, runs: 0, status: true },
            player8: { id: 8, runs: 0, status: true },
            player9: { id: 9, runs: 0, status: true },
            player10: { id: 10, runs: 0, status: true }
        })

    dispatch(stateA(statea ));
    dispatch(stateB( stateb ));
    
    let statusA = true;
    let statusB = false;

    const scoreA = useSelector((state) => state.scoreA);
    const wicketA = useSelector((state) => state.wicketA);
    const ballsA = useSelector((state) => state.ballsA);
    let runRateA = useSelector((state) => state.runRateA);

    const scoreB = useSelector((state) => state.scoreB);
    const wicketB = useSelector((state) => state.wicketB);
    const ballsB = useSelector((state) => state.ballsB);
    let runRateB = useSelector((state) => state.runRateB);
    //  const dispatch = useDispatch();

    const ballsCounterA = () => {
       dispatch(ballA());
    }

    const ballsCounterB = () => {
        dispatch(ballB());
    }

    const OverFunc = (e) => updateOver(e.target.value);
    console.log(over);

    const TeamAFunc = () => {
        // if(!status){
        let arr = [];
        let i = 1;
        for (i; i <= over; i++) {
            arr.push((<><h1> Over No : {i} </h1>
                <TeamA state={statea} score = {scoreA} change={setValueA} ballsCounter={() => ballsCounterA()} runrate = {runRateA} /> </>)

            )
            statusA = false;
            statusB = true;
           // runRateA = Math.floor(Number(scoreA) / 2);
        //    dispatch(runsRateA(runRateA));
       // }
        //runRate = {score} ;
        // status = !status;
    }
    return arr;
    
        // else 
        // return [];
    }
    // dispatch(runsRateA(runRateA))




    const TeamBFunc = () => {
        // if (!status) {
            let arr = [];
            let i = 1;
            for (i; i <= over; i++) {
                arr.push((<><h1> Over No : {i} </h1>
                    <TeamB state={stateb} change={setValueB} ballsCounter={() => ballsCounterB()} runrate = {runRateB}/> </>)
                )
                 
            }
            statusB = false;
           
            return arr;
            
        // }
        // else
        //     return [];
    }
    
    // dispatch(runsRateB(runRateB));

    const Result = () => {
        if(ballsB === 3)
        {
            if(scoreA > scoreB){
            return <p> *********  Congratulations ^^^ TEAM - A ^^^  You  -- WON THE MATCH --   **********  </p>}
            else if(scoreA < scoreB){
            return <p> *********  Congratulations ^^^ TEAM - B ^^^  You  -- WON THE MATCH --   **********  </p>}
            else{
            return <p> *********  Good Play Both ^^^ TEAM - A & B ^^^  You  -- THE MATCH WAS DRAWN --   **********  </p>}
        }
        else
        return [];
    }

    return (<>
        Enter number of Overs : <input type='text' value={over} onChange={OverFunc} />
        <TeamAboard score={scoreA} wicket={wicketA} balls={ballsA} runRate={runRateA} />

        <div>{
            TeamAFunc().map((overs, index) => {
                return (<div key={index}> {overs}</div>)
            })
        }</div> <br />

        <h1> TARGET : {scoreA + 1} </h1>
        
        <TeamBboard score={scoreB} wicket={wicketB} balls={ballsB} runRate={runRateB} />

        <div> {
            TeamBFunc().map((overs, index) => {
                return (<div key={index}> {overs}</div>)
            })
        }</div>

        <h1> RESULT :) <Result/>  </h1>
       

    </>
    )

}

export default Cricket;
