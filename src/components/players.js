import React, { Component } from 'react';
import Block from './createBlock';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

class Players extends Component {
    render() {
        const { name, color, icon, blocks, openModal, score = 0, rechargeBlocks } = this.props;
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
                    <a onClick={openModal} className="card-btn waves-effect waves-light btn-small orange modal-trigger">Cards</a>
                    <a onClick={rechargeBlocks} className="recharge-btn waves-effect waves-light btn-small red">Recharge</a>
                </div>
                <div className="stone-container">
                    {blocks}
                </div>
            </div>
        )
    }
}

export default Players;