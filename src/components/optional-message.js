import React from 'react';

const OptionalMessage = (props) => {
    return (
        <div className="message">
            {props.message}
        </div>
    )
}

export default OptionalMessage;