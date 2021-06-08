const ballsB = (balls = 0, action) => {
    switch (action.type) {
        case "IncrementBalls":
            return ++balls;
        default:
            return balls;
    }
}

export default ballsB;