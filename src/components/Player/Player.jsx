import React from 'react';
import './Player.css';

const Player = (props) => {
    return (
            <h1 id="greengold">{props.footballPlayer.firstName}
            {props.footballPlayer.lastName}</h1>
    );
}

export default Player;