import React from 'react';

const AlertUser =(props) => {
    return (
        // gets alertMessage from App and displays it once clicked
        <button onClick={props.dccMessage}>Click Me</button>
    );
}

export default AlertUser;