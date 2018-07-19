import _ from 'underscore';

export default class Joke {
    constructor(j = {}) {
        this.id = j.id && parseInt(j.id, 10) ?  parseInt(j.id, 10) : null;
        this.joke = j.joke ? _.unescape(j.joke) : '';
    }
}