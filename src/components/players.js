import React, { Component } from 'react';
import pug from '../assets/images/pug8.jpeg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

class Players extends Component {
    state = {
        name: 'Jason',
        color: 'black',
        stones: ['black'],
        score: 10,
        icon: pug,
        cards: []
    }

    handleBlockRecharge = () => {
        const { stones, color } = this.state; // will pull Stone component from props once it's constructed

        if (stones.length < 3) {
            this.setState({
                stones: [...stones, color, color, color]
            });
            return
        }
        if (stones.length === 3) {
            this.setState({
                stones: [...stones, color, color]
            });
            return
        }
        if (stones.length === 4) {
            this.setState({
                stones: [...stones, color]
            });
            return
        }
        if (stones.length === 5) {
            return
        }
    }

    render() {
        const { name, stones, score, icon, cards } = this.state;
        const stoneCount = stones.length;
        console.log(stones);

        return (
            <div className="player-container">
                <div className="player-title">
                    <img src={icon} alt="player-icon" className="player-icon" />
                    <span className="player-name">{name}</span><br></br>
                </div>
                <div className="player-stats">
                    <p className="player-score">Score: {score}</p>
                    <p className="player-stonecount">Stones: {stoneCount}</p>
                </div>
                <div className="player-btns">
                    <a onClick={this.renderPhotos} className="card-btn waves-effect waves-light btn-small orange">Cards</a>
                    <a onClick={this.handleBlockRecharge} className="recharge-btn waves-effect waves-light btn-small red">Recharge</a>
                </div>
            </div>
        )
    }
}

export default Players;