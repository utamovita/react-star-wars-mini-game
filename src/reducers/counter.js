const initialState = {
    playerOne: 0,
    playerTwo: 0
}

export const counter = (state = initialState, action) => {
    if (action.type === 'UPDATE_COUNTER') {
        if (action.unitType === "people") {
            console.log('p1 mass:'+ action.playerOne.mass);
            console.log('p2 mass:'+ action.playerTwo.mass);
            
            if (action.playerOne.mass > action.playerTwo.mass) {
                console.log('p1 wins, right?' + 1);
                state.playerOne += 1;
            }
            else if (action.playerOne.mass < action.playerTwo.mass) {
                console.log('p2 wins, right?');
                state.playerTwo += 1;
            }
        }
        else {
            if (action.playerOne.crew > action.playerTwo.crew) {
                console.log('p1 wins, right?');
                state.playerOne += 1;
            }
            else if (action.playerOne.crew < action.playerTwo.crew) {
                console.log('p2 wins, right?');
                state.playerTwo += 1;
            }
        }
    }

    return state;
}