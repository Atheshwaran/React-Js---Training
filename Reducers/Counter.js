const counter = (count = 0, action) => {
    switch (action.type) {
        case "Increment":
            return count + 1;
        case "Decrement":
            return count - 1;
        default:
            return count;
    }
}

export default counter;