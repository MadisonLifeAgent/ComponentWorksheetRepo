// imports
import React, { Component } from 'react';
//import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

// style sheet(s)
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //firstName: 'Reggie',
            //lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    render() {
        return (
            //<DisplayName footballplayer={this.people} />
            <NamesList instructorName={this.state.names} />  // passed to NamesList
        )
    }
}

export default App;