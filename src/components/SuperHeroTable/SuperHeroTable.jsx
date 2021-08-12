import React from 'react';
import './SuperHeroTable.css';

function SuperHeroTable(props) {
    const superheroName = props.superheroName;
    const superHeroNames = superheroName.map((superhero) =>
        <tr key={superhero.superheroId}>
            <td>{superhero.name}</td>
            <td>{superhero.primaryAbility}</td>
            <td>{superhero.secondaryAbility}</td>
        </tr>
    );

    return (
        <table>
            <tr>
                <th>Superhero</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
            </tr>
                {superHeroNames}
        </table>

    )
}

export default SuperHeroTable;