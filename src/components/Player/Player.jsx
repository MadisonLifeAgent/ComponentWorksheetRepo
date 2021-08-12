import React from 'react';
import './Player.css';

const Player = (props) => {
    return (
        <div className="container-fluid">
            <h1 id="greengold">{props.footballplayer.firstName}
            {props.footballplayer.lastName}</h1>
        </div>
    );
}

export default Player;