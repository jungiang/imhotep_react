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
    addBlockToShip(){
        let {currentBlocks, maxBlocks} = this.state;
        if(currentBlocks < maxBlocks){
            this.setState({
                currentBlocks: currentBlocks + 1
            })
            this.props.moveBlock(this.props.index);
        }else{
            alert('ship is full');
        }
    }
    render(){
        const {style} = this.state;
        const {blocks, index} = this.props;
        return(
            <div className="ship_dock" data-index={index} style={style} onClick={this.addBlockToShip.bind(this)}>
                {blocks}
            </div>
        )
    }
}

export default Ship;