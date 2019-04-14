import React, {Component} from 'react';

class BurialChamber extends Component{
    state = {
        blockList: [[], [], []],
        blockPosition: 0
    }
    placeBlocks = () => {
        let {blockList, blockPosition} = this.state;
        const shipsArray = this.props.dockShip(this.props.index);
        if(shipsArray){
            for(let i = 0; i < shipsArray.length; blockPosition++, i++){
                blockList[blockPosition%3].push(shipsArray[i]);
            }
            this.setState({
                blockList,
                blockPosition
            })
        }
    }
    render(){
        const [first, second, third] = this.state.blockList;
        return (
            <div className=" destination burial-chamber" onClick={this.placeBlocks}>
            Burial Chamber
                <div className="burial-chamber-container">
                    {first}
                </div>
                <div className="burial-chamber-container">
                    {second}
                </div>
                <div className="burial-chamber-container">
                    {third}
                </div>
            </div>
        )
    }
}

export default BurialChamber;