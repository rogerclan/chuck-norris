// @flow
import React from 'react';
import Joke from "../api/joke";
import JokeCard from "./joke";

type Props = {
    jokes: Array<Joke>
}


const JokeList = (props: Props) => {

    return (<div className="chuck-joke-list">
        {props.jokes.map(joke => <JokeCard key={joke.id} joke={joke.joke}/>)}
    </div>);
};

export default JokeList