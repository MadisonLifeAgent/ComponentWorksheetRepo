import React from 'react';
import './NamesList.css';

function NamesList(props) {
    // take the items in array and map them to a new array/list and put into list item
    const instructorName = props.instructorName;
    const listOfNames = instructorName.map((name) =>
        <li key={name}>
            {name}
        </li>
    );
    console.log(listOfNames[0]);
    return (
        // return the list of names that is formatted as a list
        <ul>{listOfNames}</ul>
    )
}

export default NamesList;