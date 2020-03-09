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
                        <Typography component="h2">
                            {props.stats.name}
                        </Typography>
                        <Typography component="h3">
                            {props.type === "people" ? `mass: ${props.stats.mass}` : `crew: ${props.stats.crew}`}
                        </Typography>
                    </CardContent>
                </Card>
            }
        </>
    )
}

export default CardUnit;