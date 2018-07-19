// @flow
import {BASE_URL} from './server';
import Joke from "./joke";

const url = `${BASE_URL}/jokes/random/`;


export const getRandomChuckJoke = () => {
    return fetch(url).then(res => res.json()).then(({value}) => new Joke(value));
};

export const getMultipleRandomChuckJokes = (qty: number) => {
    return fetch(url + qty).then(res => res.json()).then(({value}) => value.map(val => new Joke(val)));
};


const API = {
    getRandomChuckJoke,
    getMultipleRandomChuckJokes
};

export default API;