// imports
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';

// style sheet(s)
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.player = {
            firstName: 'Reggie',
            lastName: 'White'
        };
    }

    render() {
        return (
            <DisplayName footballplayer={this.player} />
        )
    }
}

export default App;