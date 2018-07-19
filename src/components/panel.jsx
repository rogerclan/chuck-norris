
import React, {Component} from 'react';
import Joke from "../api/joke";
import ChuckApi from '../api/chuck';
import JokeList from "./joke-list";
import '../styles/panel.scss';
// @flow
type Props = {}

type State = {
    jokes: Array<Joke>,
    qty: number
}

class Panel extends Component<Props, State> {
    state = {
        jokes: [],
        qty: 3
    };

    componentDidMount() {
        this.loadSingleJoke();
    };

    loadSingleJoke = () => {
        ChuckApi.getRandomChuckJoke()
            .then(joke => this.setState({jokes: [joke]}))
            .catch(err => console.log(`Error fetching random joke with error: ${err.message}.`));
    };

    handleNextBtnClick = () => {
        this.loadSingleJoke();
    };

    handleMultipleBtnClick = () => {
        ChuckApi.getMultipleRandomChuckJokes(this.state.qty)
            .then(jokes => this.setState({jokes}))
            .catch(err => console.log(`Error fetching random joke with error: ${err.message}.`))
    };

    handleQtyChange = (qty: number) => {
        if(qty < 1) {
            qty = 1;
        } else if (qty > 10) {
            qty =10;
        }

        this.setState({qty});
    };

    render() {
        return (<div className="chuck-panel">
            <JokeList jokes={this.state.jokes}/>
            <p className="chuck-btn-bar">
                <button className="chuck__button-next" onClick={this.handleNextBtnClick}>Next</button>
                or get
                <input type="number" value={this.state.qty} max={10} min={1} className="chuck__input"
                       onChange={ev => this.handleQtyChange(parseInt(ev.target.value, 10))}/>
                more
                <button className="chuck__button-go" onClick={this.handleMultipleBtnClick}>GO</button>
            </p>
        </div>);
    };
}

export default Panel;