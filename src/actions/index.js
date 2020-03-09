export const changeType = unit => {
    return {
        type: 'CHANGE_TYPE',
        payload: unit
    };
}

export const resetUnits = () => {
    return {
        type: 'RESET_UNITS'
    };
}

export const updateUnits = (playerOne, playerTwo) => {
    return {
        type: 'UPDATE_UNITS',
        playerOne,
        playerTwo
    };
}

export const updateCounter = (playerOne, playerTwo, unitType) => {
    return {
        type: 'UPDATE_COUNTER',
        playerOne,
        playerTwo,
        unitType
    };
}