const runRateA = (runRate = 0, action) => {
    switch (action.type) {
        case "CalculateA":
            return {runRate : action.num}
        default:
            return runRate;
    }
}

export default runRateA;