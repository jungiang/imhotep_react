import React, { Component } from 'react';
import pug from '../assets/images/pug8.jpeg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

class Players extends Component {
    state = {
        name: 'Jason',
        color: 'black',
        stones: [],
        score: 10,
        icon: pug,
        cards: []
    }

    handleBlockRecharge = () => {
        const { stones, color } = this.state;

        if (stones.length < 3) {
            this.setState({
                stones: [...stones, { color }, { color }, { color }]
            });
            return
        }
        if (stones.length === 3) {
            this.setState({
                stones: [...stones, { color }, { color }]
            });
            return
        }
        if (stones.length === 4) {
            this.setState({
                stones: [...stones, { color }]
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
        console.log(stoneCount);

        return (
            <div className="row center">
                <div className="col s4 m3">
                    <div className="card orange darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{name}</span>
                            <p>Score: {score}</p>
                            <img src={icon} alt="pug" />
                            <p>Stones: {stoneCount}</p>
                            <div onClick={this.handleBlockRecharge} className="fixed-action-btn rechargeMainBtn">
                                <a className="btn-floating btn-med red">
                                    <i className="large material-icons">x</i>
                                </a>
                                <ul>
                                    <li><a className="btn-floating red"><i className="material-icons">check</i></a></li>
                                    <li><a className="btn-floating blue darken-1"><i className="material-icons">close</i></a></li>
                                </ul>
                            </div>
                            <div className="cards container">
                                <p>Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Players;