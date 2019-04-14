import React, {Component} from 'react';


class Temple extends Component{

    addBlocktoDestination(){
        this.props.moveShipBlock(this.props.shipIndex);
    }

    render(){
        return(
            <div className="destinationContainer">
                <button onClick={this.addBlocktoDestination.bind(this)} className="destinationHarbor">Harbor</button>
                <div className="destination">
                    <div className="templeBlockContainer">
                    {this.props.templeArray}
                    </div>
                </div>
            </div>
        )
    }
}

export default Temple;

