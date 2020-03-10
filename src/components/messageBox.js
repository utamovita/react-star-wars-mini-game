import React from 'react';

const MessageBox = (props) => {
    return (
        <div className="message">
            {props.message}
        </div>
    )
}

export default MessageBox;