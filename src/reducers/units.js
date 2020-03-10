const initialState = {
    playerOne: false,
    playerTwo: false,
    unitType: false
}

export const units = (state = initialState, action) => {
    if (action.type === 'UPDATE_UNITS') {
        state.playerOne = action.playerOne;
        state.playerTwo = action.playerTwo;
    }

    else if (action.type === 'RESET_UNITS') {
        state.playerOne = false;
        state.playerTwo = false;
    }

    else if (action.type === 'CHANGE_TYPE') {
        state.unitType = action.payload;
    }
    
    return state;
}