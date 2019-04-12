import React, {Component} from 'react';
import image1 from '../assets/images/1.png'//move to app when dynamically choosing image

class Ship extends Component{
    constructor(props){
        super(props);
        this.state = {
            blocks: [],
            maxBlocks: null,
            minBlocksToSail: null
        }
        this.dummyData = {
            image: image1
        }
    }
    componentDidMount(){
        //set the randomized ship state?
    }
    addBlockToShip(){
        debugger;
        const newBlock = this.props.moveBlockTest();
        const {blocks} = this.state;
        if(block){
            this.setState({
                blocks: [...blocks, newBlock]
            })    
        }
    }
    render(){
        const {image} = this.dummyData;//this will be this.props when dynamic
        const {blocks} = this.state;
        return(
            <div className="ship_dock">
                <img onClick={this.addBlockToShip.bind(this)} src={image} alt="ship" height="120px" width="200px"/>{/*change to bg-image or change css for blocks to show on top */}
                {blocks}
            </div>
        )
    }
}

export default Ship;