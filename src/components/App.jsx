// imports
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperHeroTable from './SuperHeroTable/SuperHeroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperHeroCreateForm';

// style sheet(s)
import './App.css'


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
            ]
        }
    }

    alertMessage = () => {
        alert("devCodeCamp!");
    }

    createSuperhero = (newSuperhero) => {
        this.state.superheroes.push(newSuperhero);
    }

    render() {
        return (
        <div className="container-fluid m-0">
            <DisplayName footballPlayer={this.state} />
            <NamesList instructorName={this.state.names} />
            <AlertUser dccMessage={this.alertMessage}/>
            <SuperHeroTable superheroName={this.state.superheroes} />
            <SuperheroCreateForm createNewSuperhero={this.createSuperHero} superHeroes={this.state.superHeroes}/>
        </div>
        )
    }
}

export default App;