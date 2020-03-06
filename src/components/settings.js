import React from 'react';
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Button } from '@material-ui/core';

class Settings extends React.Component {
    state = {
        unitType: ''
    }

    setUnit(e) {
        this.setState({
            unitType: e.target.value
        })
    }

    render() {
        return (
            <>
                <FormControl className="settings-box">
                    <FormLabel>Unit type</FormLabel>
                    <RadioGroup onChange={this.setUnit.bind(this)}>
                        <FormControlLabel value="starships" control={<Radio />} label="Starships" />
                        <FormControlLabel value="people" control={<Radio />} label="People" />
                    </RadioGroup>
                </FormControl>
                <Button color="secondary" variant="contained">Play!</Button>
            </>
        )
    }
}

export default Settings;