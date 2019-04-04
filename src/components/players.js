import React, { Component } from 'react';
import pug from '../assets/images/pug8.jpeg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Jason',
            color: 'black',
            stones: [],
            score: 10,
            icon: pug,
            cards: []
        }
    }

    handleBlockRecharge = () => {
        const { stones, color } = this.state.stones;

        if (stones.length < 3) {
            const newStones = [{ color }, { color }, { color }];
            this.setState({
                stones: stones.push(...newStones)
            });
        }
        if (stones.length === 3) {
            const newStones = [{ color }, { color }];
            this.setState({
                stones: stones.push(...newStones)
            });
        }
        if (stones.length === 4) {
            const newStones = [{ color }];
            this.setState({
                stones: stones.push(newStones)
            });
        }
        if (stones.length === 5) {
            return
        }
    }

    render() {
        const { name, stones, score, icon, cards } = this.state;
        const stoneCount = stones.length;

        return (
            <div className="row">
                <div className="col s4 m3">
                    <div className="card orange darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{name}</span>
                            <p>Score: {score}</p>
                            <img src={icon} alt="pug" />
                            <p>Stones: {stoneCount}</p>
                            <div className="fixed-action-btn">
                                <a className="btn-floating btn-med red">
                                    <i className="large material-icons">add_circle</i>
                                </a>
                                <ul>
                                    <li onClick={this.handleBlockRecharge}><a className="btn-floating red"><i className="material-icons">check</i></a></li>
                                    <li><a className="btn-floating blue darken-1"><i className="material-icons">close</i></a></li>
                                </ul>
                            </div>
                            <p onClick={this.displayCards}>Cards</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Players;