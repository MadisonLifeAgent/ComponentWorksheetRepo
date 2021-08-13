import React from 'react';
import './SuperHeroCreateForm.css';

// Form to create superhero
class SuperHeroCreateForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            superheroId: null,
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
    }

    // arrow function to handle change
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    }

    // arrow function to handle submit
    handleSubmit = (event, props) => {
        this.setState({
            [this.state.superheroId]: props.superHeroes.length = 1
        })
        event.preventDefault();
        // this passes in createsuperhero function from App.jsx (or parent component)
        this.props.createNewSuperhero(this.state)
    }

    render() {
        return (
            // this form is used to create a new superhero*
            <form onSubmit={this.props.handleSubmit}>
                <label id="inputmargin" >Superhero Name: </label>
                    <input id="inputmargin" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    <br />
                <label>Primary Superpower: </label>
                    <input id="inputmargin" name="primaryAbility" type="text" value={this.state.primaryAbility} onChange={this.handleChange} />
                    <br />
                <label>Secondary Superpower: </label>
                    <input id="inputmargin" name="secondaryAbility" type="text" value={this.state.secondaryAbility} onChange={this.handleChange} />
                    <br />
                <button id="inputmargin" type="submit" value="Submit">Submit New Superhero</button>
            </form>
        );
    }
}

export default SuperHeroCreateForm;