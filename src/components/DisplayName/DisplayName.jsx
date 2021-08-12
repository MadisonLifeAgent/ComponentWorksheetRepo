import React from 'react';
import './DisplayName.css';
import Player from '../Player/Player';

const DisplayName = (props) => {
    return (
        <div className="row">
            <Player footballplayer={props.footballplayer} />
        </div>
    );
}

export default DisplayName;