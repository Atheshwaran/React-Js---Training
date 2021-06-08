const initialState = { value : 0 };

const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case "IncrementSaga" :
            return { ...state, value : state.value + 1};
        case "Decrement" :
            return { ...state, value : state.value - 1};
        default :
        return state;
    }
}
export default AppReducer;