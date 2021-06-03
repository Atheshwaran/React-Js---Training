export const increment = (num) => {
    return { type: "Increment", run: num };
}

export const wicket = () => {
    return { type: "Wicket" };
}

export const stateA = (stateA) => {
    return { type: "Update", payload: stateA }
}