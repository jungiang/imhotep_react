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

        if (stones.length < 3){
            const newStones = [{color}, {color}, {color}];
            this.setState({
                stones: stones.push(...newStones)
            });
        }
        if (stones.length === 3){
            const newStones = [{color}, {color}];
            this.setState({
                stones: stones.push(...newStones)
            });
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
                    <p>Stones: {stoneCount}</p>
                    <p>{score}</p>
                    <img src={icon} alt="pug"/>
                </div>
                <div className="card-action">
                    <p onClick={this.displayCards}>Cards</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Players;