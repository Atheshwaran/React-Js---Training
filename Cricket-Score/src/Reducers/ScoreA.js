const scoreA = (score = 0, action) => {
    switch (action.type) {
        case "IncrementA":
            return Number(score) + Number(action.run);
        default:
            return score;
    }
}

export default scoreA;