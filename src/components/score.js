import React from 'react';
import { useSelector } from "react-redux";

const Score = () => {
    const scoreOne = useSelector(state => state.game.score.playerOne);
    const scoreTwo = useSelector(state => state.game.score.playerTwo);

    return <h2 className="score">{scoreOne} : {scoreTwo}</h2>;
}

export default Score;