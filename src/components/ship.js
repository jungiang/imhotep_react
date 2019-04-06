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
    render(){
        const {image} = this.dummyData;//this will be this.props when dynamic
        return(
            <div className="ship_dock">
                <img src={image} alt="ship" height="100px" width="200px"/>
            </div>
        )
    }
}

export default Ship;