import React, {Component} from 'react';
import {shipConstructor} from '../helpers';

class Ship extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: null,
            maxBlocks: null,
            minBlocksToSail: null,
            currentBlocks: 0
        }
        this.addBlockToShip = this.addBlockToShip.bind(this);
        this.prepareToSail = this.prepareToSail.bind(this);
    }
    componentDidMount(){
        this.randomizeShip();
    }
    randomizeShip(){
        const {style, maxBlocks, minBlocksToSail} = shipConstructor();
        this.setState({
            style: style,
            maxBlocks: maxBlocks,
            minBlocksToSail: minBlocksToSail
        })
    }
    async addBlockToShip(){
        let {currentBlocks, maxBlocks} = this.state;
        if(currentBlocks < maxBlocks){
            const hasBlock = await this.props.moveBlock(this.props.index);
            if(hasBlock){
                this.setState({
                    currentBlocks: currentBlocks + 1
                })
            }else{
                alert('player is out of blocks')
            }
        }else{
            alert('ship is full');
        }
    }
    prepareToSail(){
        const {minBlocksToSail, currentBlocks} = this.state;
        const {sailShip, index} = this.props;
        if(currentBlocks >= minBlocksToSail){
            sailShip(index);
        }else{
            sailShip(false);
            alert('Ship does not meet block requirement to sail');
        }
    }
    render(){
        const {style} = this.state;
        const {blocks, index} = this.props;
        return(
            <div className="ship-loading-zone">
                <button onClick={this.prepareToSail}>Sail</button>
                <div className="ship_dock" data-index={index} style={style} onClick={this.addBlockToShip}>
                    {blocks}
                </div>
            </div>
        )
    }
}

export default Ship;