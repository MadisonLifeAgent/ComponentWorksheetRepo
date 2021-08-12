import React from 'react';
import './DisplayName.css';
import Player from '../Player/Player';

const DisplayName = (props) => {
    return (
            <Player footballPlayer={props.footballPlayer} />
    );
}

export default DisplayName;