// imports
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';

// style sheet(s)
import './App.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        }
    }

    render() {
        return (
        <div className="container-fluid m-0">
            <DisplayName footballPlayer={this.state} />
            <NamesList instructorName={this.state.names} />
        </div>
        )
    }
}

export default App;