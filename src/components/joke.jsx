import React from 'react';
import '../styles/card.scss';

// @flow
type Props = {
    joke: string
}

const JokeCard  = (props: Props) => {
    return (
        <div className="chuck-card">
            <p className="chuck-card-joke">{props.joke}</p>
            <p className="chuck-card-signature">-- Chuck Norris</p>
        </div>
    );
};

export default JokeCard;