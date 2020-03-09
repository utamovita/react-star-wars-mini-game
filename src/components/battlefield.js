import React, { useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { updateUnits, updateCounter } from '../actions';
import CardUnit from './card-unit';
import GameResult from './game-result';
import OptionalMessage from './optional-message';

const Battlefield = () => {
   const unitType = useSelector(state => state.units.unitType);
   const playerOne = useSelector(state => state.units.playerOne);
   const playerTwo = useSelector(state => state.units.playerTwo);
   const dispatch = useDispatch();
   let [warnMessage, setMessage] = useState('');
   let [isLoading, setSpinner] = useState(false);

   const play = () => {
      if(!unitType) {
         setMessage(warnMessage = 'Select unit type first!');
         return;
      }
      setMessage(warnMessage = '');
      setSpinner(isLoading = true);
      axios.get(`https://swapi.co/api/${unitType}`)
         .then(res => {
            const countUnits = res.data.results.length;
            const randomNum1 = Math.floor(Math.random() * countUnits);
            const randomNum2 = Math.floor(Math.random() * countUnits);
            const unit1 = res.data.results[randomNum1];
            const unit2 = res.data.results[randomNum2];

            dispatch(updateUnits(unit1, unit2));
            dispatch(updateCounter(unit1, unit2, unitType));

            setSpinner(isLoading = false);
         })
   }

   return (
      <>
         { isLoading ? <CircularProgress/> : ''}
         <OptionalMessage message={warnMessage}/>
         <GameResult playerOne={playerOne} playerTwo={playerTwo} unitType={unitType} />
         <CardUnit player="one" stats={playerOne} type={unitType}/>
         <CardUnit player="two" stats={playerTwo} type={unitType}/>
         <Button color="secondary" variant="contained" onClick={play}>Play!</Button>
      </>
   )
}

export default Battlefield;