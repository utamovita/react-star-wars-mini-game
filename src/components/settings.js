import React from 'react';
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { changeType, resetUnits, resetScore, resetMessage } from '../actions';

const Settings = () => {
    const dispatch = useDispatch();

    const setUnit = e => {
        dispatch(changeType(e.target.value));
        dispatch(resetUnits());
        dispatch(resetScore());
        dispatch(resetMessage());
    }

    return (
        <FormControl className="settings-box">
            <FormLabel>Unit type</FormLabel>
            <RadioGroup onChange={setUnit}>
                <FormControlLabel value="starships" control={<Radio />} label="Starships"/>
                <FormControlLabel value="people" control={<Radio />} label="People" />
            </RadioGroup>
        </FormControl>
    )
}

export default Settings;