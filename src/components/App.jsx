// imports
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import SuperHeroCreateForm from './SuperheroCreateForm/SuperHeroCreateForm';
import Jokes from './Jokes/Jokes';

// style sheet(s)
import './App.css'
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ],
            jokes: []
        }
    }

    componentDidMount() {
        this.getJokes();
    }

    alertMessage = () => {
        alert("devCodeCamp!");
    }


    createSuperhero = (newSuperhero) => {
        this.state.superheroes.push(newSuperhero);
        this.setState({
            superheroId: this.state.superheroes.length + 1
        })
        console.log(newSuperhero.superheroId)
        
    }

    async getJokes() {
        try{
            let response = await axios.get("https://official-joke-api.appspot.com/jokes/ten");
            this.setState({
                jokes: response.data
            });
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    render() {
        return (
        <div className="container-fluid m-0">
            <DisplayName footballPlayer={this.state} />
            <NamesList instructorName={this.state.names} />
            <AlertUser dccMessage={this.alertMessage} />
            <SuperHeroTable superheroName={this.state.superheroes} />
            <SuperHeroCreateForm createSuperhero={this.createSuperhero} />
            <Jokes jokes={this.state.jokes} />
        </div>
        )
    }
}

export default App;