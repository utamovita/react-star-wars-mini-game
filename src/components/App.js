import React from 'react'
import { Container } from '@material-ui/core'
import Score from './score'
import Battlefield from './battlefield'
import Settings from './settings';

function App() {
    return (
        <Container>
            <Settings/>
            <Score/>
            <Battlefield/>
        </Container>
    )
}

export default App;