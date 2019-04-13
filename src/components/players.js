import React, { Component } from 'react';
import Block from './createBlock';
import pug from '../assets/images/pug8.jpeg';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

class Players extends Component {
    handleBlockRecharge = () => {
        const { stones } = this.state;

        if (stones.length < 3) {
            this.setState({
                stones: [...stones, <Block/>, <Block/>, <Block/>]
            });
            return
        }
        if (stones.length === 3) {
            this.setState({
                stones: [...stones, <Block/>, <Block/>]
            });
            return
        }
        if (stones.length === 4) {
            this.setState({
                stones: [...stones, <Block/>]
            });
            return
        }
        if (stones.length === 5) {
            return
        }
    }

    render() {
        const { name, color, icon, blocks, openModal, score = 0 } = this.props;
        return (
            <div className="player-container">
                <div className="player-title">
                    <img src={icon} alt="player-icon" className="player-icon" />
                    <span className="player-name">{name}</span><br></br>
                </div>
                <div className="player-stats">
                    <p className="player-score">Score: {score}</p>
                </div>
                <div className="player-btns">
                    <a onClick={openModal} className="card-btn waves-effect waves-light btn-small orange">Cards</a>
                    <a onClick={this.handleBlockRecharge} className="recharge-btn waves-effect waves-light btn-small red">Recharge</a>
                </div>
                <div className="stone-container">
                    {/* {blocks} */}
                </div>
            </div>
        )
    }
}

export default Players;