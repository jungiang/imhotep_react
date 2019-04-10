import React, {Component} from 'react';
import App from './app';


class Temple extends Component {
        state={
            'stones': [], //will have length of 5
            'stoneReplacementPos': 0,
            'docked': false,
            'players':{},
            'color': []
        };

    MapThroughStones(){
        const stonesList = this.state.stones.map((stones, index)=>{
            return <div  className="dummyBlocks" key={index}>{stones}</div>
        })
        return stonesList;
    }
        
    addStonesToArray=()=>{
        // debugger;
        const {dummydata} = this.props;
        const {stones} = this.state;
        let {stoneReplacementPos} = this.state;
        for( let index = 0; index < dummydata.length; index++){
            if(this.state.stones.length < 5){
                stones.push(dummydata[index]);
                this.setState({
                    stones
                });
            } else {
                stones[stoneReplacementPos] = dummydata[index];
                stoneReplacementPos++
                if(stoneReplacementPos === 5){
                    stoneReplacementPos = 0
                }
                this.setState({
                    stones,
                    stoneReplacementPos
                });
        }
        // this.colorBlocks(shipBlocks[index])
        this.addPlayerCounter(dummydata[index]);
        }
    }


    addPlayerCounter(color){
        const {players} = this.state;
        if(!(players[color])){
            players[color] = 1
            this.setState({
                players
            })
            console.log('new player', this.state.players);
        } else{
            players[color] += 1;
            this.setState({
                players
            })
            console.log('existing player', this.state.players)
        }
    }

    render(){
        console.log('stones!', this.state.stones)
        return(            
        <div className="templeContainer">
            <div className="harborContainer">
                <button onClick={()=>{
                    this.addStonesToArray(this.dummydata);
                }}>Harbor</button>
            </div>
            <div className="temple2Container">
                <div className="TempleBlockContainer">
                    {this.MapThroughStones()}
                </div>
            </div>
        </div>
        )
    }
}

export default Temple;

