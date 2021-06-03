const wicket = (wicket = 0, action) => {
    switch (action.type) {
        case "Wicket":
            return ++wicket;
        default:
            return wicket;
    }
}

export default wicket;