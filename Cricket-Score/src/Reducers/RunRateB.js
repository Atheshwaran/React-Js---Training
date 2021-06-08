const runRateB = (runRate = 0, action) => {
    switch (action.type) {
        case "CalculateB":
            return {runRate : action.num}
        default:
            return runRate;
    }
}

export default runRateB;