const initialState = {
    playerOne: false,
    playerTwo: false,
    unitType: false
}

export const units = (state = initialState, action) => {
    if (action.type === 'UPDATE_UNITS') {
        state.playerOne = action.playerOne;
        state.playerTwo = action.playerTwo;
        return state;
    }

    if (action.type === 'RESET_UNITS') {
        state.playerOne = false;
        state.playerTwo = false;
        return state;
    }

    if (action.type === 'CHANGE_TYPE') {
        state.unitType = action.payload;
        return state;
    }
    
    return state;
}