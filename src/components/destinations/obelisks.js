import React, {Component} from 'react';

class Obelisks extends Component{
    state = {
        blockList: [[], [], [], []]
    }
    placeBlocks(){
        const blockList = [[], [], [], []]
        this.setState({
            blockList
        })
    }
    render(){
        const [first, second, third, fourth] = this.state.blockList;
        return (
            <div className=" destination obelisks">
                <div className="obelisks-container">
                    {first}
                </div>
                <div className="obelisks-container">
                    {second}
                </div>
                <div className="obelisks-container">
                    {third}
                </div>
                <div className="obelisks-container">
                    {fourth}
                </div>
            </div>
        )
    }
}

export default Obelisks;