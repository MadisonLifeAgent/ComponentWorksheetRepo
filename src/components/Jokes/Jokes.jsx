import React from 'react';

function Jokes(props){
    const jokes = props.jokes;
    const allJokes = jokes.map((joke) =>
        <h1>Setup: {joke.setup} <br></br>
            Punchline: {joke.punchline}</h1>
    );

    return (
        <div>
            {allJokes}
        </div>
    )
}


export default Jokes;