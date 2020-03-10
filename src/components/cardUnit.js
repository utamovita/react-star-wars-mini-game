import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CardUnit = (props) => {
    const isCardDefined = props.stats;

    return (
        <>
            {!isCardDefined ? '' :
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Player {props.player}
                        </Typography>
                        <Typography component="h5" variant="h5">
                            {props.stats.name}
                        </Typography>
                        <Typography component="h6" variant="h6">
                            {props.type === "people" ? `mass: ${props.stats.mass}` : `crew: ${props.stats.crew}`}
                        </Typography>
                    </CardContent>
                </Card>
            }
        </>
    )
}

export default CardUnit;