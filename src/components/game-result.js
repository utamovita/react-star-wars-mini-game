import React from 'react';

const GameResult = (props) => {
    const arePlayersDefined = props.playerOne;
    
    return (
        <>
            {!arePlayersDefined ? '' :
                <div className="game-result">
                    XD
                </div>
            }
        </>
    )
}

export default GameResult;