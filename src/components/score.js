import React from 'react';
import { useSelector } from "react-redux";

const Score = () => {
    const scoreOne = useSelector(state => state.counter.playerOne);
    const scoreTwo = useSelector(state => state.counter.playerTwo);

    return (
        <div className="score-board">
            <h2>{scoreOne} : {scoreTwo}</h2>
        </div>
    )
}

export default Score;