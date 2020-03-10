const initialState = {
    score: {
        playerOne: 0,
        playerTwo: 0
    },
    
    message: ''
}

export const game = (state = initialState, action) => {
    if (action.type === 'UPDATE_SCORE') {
        if (action.unitType === "people") {
            const p1UnitMass = parseInt(action.playerOne.mass);
            const p2UnitMass = parseInt(action.playerTwo.mass);
            
            if (p1UnitMass > p2UnitMass) {
                state.score.playerOne += 1;
                state.message = 'Player one wins!';
            }
            else if (p1UnitMass < p2UnitMass) {
                state.score.playerTwo += 1;
                state.message = 'Player two wins!';
            }
            else state.message = 'Draw!';
        }else {
            const p1Crew = parseInt(action.playerOne.crew);
            const p2Crew = parseInt(action.playerTwo.crew);

            if (p1Crew > p2Crew) {
                state.score.playerOne += 1;
                state.message = 'Player one wins!';
            }
            else if (p1Crew < p2Crew) {
                state.score.playerTwo += 1;
                state.message = 'Player two wins!';
            }
            else state.message = 'Draw!';
        }
    }
    else if (action.type === 'RESET_SCORE') {
        state.score.playerOne = 0;
        state.score.playerTwo = 0;
    }
    else if (action.type === 'RESET_MESSAGE') state.message = '';
    else if (action.type === 'UPDATE_MESSAGE') state.message = action.payload

    return state;
}