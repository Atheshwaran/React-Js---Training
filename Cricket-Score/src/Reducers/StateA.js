const stateA = (state, action) => {
    switch (action.type) {
        case "Update":
            return { state: action.payload };
        default:
            return stateA;
    }
}

export default stateA;