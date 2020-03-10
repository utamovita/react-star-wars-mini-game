import React, { useState } from 'react';
import axios from 'axios';
import { Button, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { updateUnits, updateScore, updateMessage, resetUnits, resetMessage } from '../actions';
import CardUnit from './cardUnit';
import MessageBox from './messageBox';

const Battlefield = () => {
   const message = useSelector(state => state.game.message);
   const units = useSelector(state => state.units);
   const dispatch = useDispatch();

   let [isLoading, setSpinner] = useState(false);

   const play = () => {
      if(!units.unitType) {
         dispatch(updateMessage('Select unit type first!'));
         return;
      }

      dispatch(resetUnits());
      dispatch(resetMessage());
      setSpinner(isLoading = true);

      axios.get(`https://swapi.co/api/${units.unitType}`)
         .then(res => {
            const countUnits = res.data.results.length;
            const randomNum1 = Math.floor(Math.random() * countUnits);
            const randomNum2 = Math.floor(Math.random() * countUnits);
            const unit1 = res.data.results[randomNum1];
            const unit2 = res.data.results[randomNum2];

            dispatch(updateUnits(unit1, unit2));
            dispatch(updateScore(unit1, unit2, units.unitType));

            setSpinner(isLoading = false);
         })
   }

   return (
      <div className="battlefield">
         { isLoading ? <CircularProgress/> : ''}
         <MessageBox message={message}/>
         <CardUnit player="one" stats={units.playerOne} type={units.unitType}/>
         <CardUnit player="two" stats={units.playerTwo} type={units.unitType}/>
         <Button color="secondary" variant="contained" onClick={play}>Play!</Button>
      </div>
   )
}

export default Battlefield;