export const changeType = unit => {
    return {
        type: 'CHANGE_TYPE',
        payload: unit
    };
}

export const updateUnits = (playerOne, playerTwo) => {
    return {
        type: 'UPDATE_UNITS',
        playerOne,
        playerTwo
    };
}
export const updateScore = (playerOne, playerTwo, unitType) => {
    return {
        type: 'UPDATE_SCORE',
        playerOne,
        playerTwo,
        unitType
    };
}

export const updateMessage = message => {
    return {
        type: 'UPDATE_MESSAGE',
        payload: message
    };
}

export const resetUnits = () => {
    return {
        type: 'RESET_UNITS'
    };
}

export const resetScore = () => {
    return {
        type: 'RESET_SCORE'
    };
}

export const resetMessage = () => {
    return {
        type: 'RESET_MESSAGE'
    };
}