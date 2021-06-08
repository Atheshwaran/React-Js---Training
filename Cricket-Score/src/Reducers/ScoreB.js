const scoreB = (score = 0, action) => {
    switch (action.type) {
        case "Increment":
            return Number(score) + Number(action.run);
        default:
            return score;
    }
}

export default scoreB;