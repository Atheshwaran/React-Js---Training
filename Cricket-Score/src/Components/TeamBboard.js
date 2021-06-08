import  React from 'react';

function TeamBboard(props) {
    return( <>
        <h1> Score : {props.score}  ||   Wickets : {props.wicket}/10    ||    Balls : {props.balls}/6   || Run-Rate : {props.runRate} </h1>
        {/* Enter number of Overs : <input type='text' value={over} onChange={OverFunc} /> */}
        <h1> Team B - Batting </h1>
        </>
    )
}

export default TeamBboard;