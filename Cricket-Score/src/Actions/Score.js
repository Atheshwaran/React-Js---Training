export const incrementA = (score, run) => {
    const obj = {score, run}
    console.log("obj = ");
    return { type: "IncrementA", payload: obj };
}

export const wicketA = () => {
    return { type: "WicketA" };
}

export const stateA = (stateA) => {
    return { type: "UpdateA", payload: stateA }
}

export const ballA = () => {
    return { type: "IncrementBallsA" }
}

export const incrementB = (num) => {
    return { type: "Increment", run: num };
}

export const wicketB = () => {
    return { type: "Wicket" };
}

export const stateB = (stateB) => {
    return { type: "Update", payload: stateB }
}

export const ballB = () => {
    return { type: "IncrementBalls" }
}

export const runsRateA = (num) => {
    return { type: "CalculateA", runs: num }
}

export const runsRateB = (num) => {
    return { type: "CalculateB", runs: num }
}
