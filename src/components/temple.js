import React, {Component} from 'react';
import App from './app';


class Temple extends Component {
        state={
            'stones': [], //will have length of 5
            'stoneReplacementPos': 0,
            'docked': false,
            'players':{},
            'color': [],
            'templePoints': {}
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

    calculateTemplePoints=()=>{
        const {stones} = this.state;
        let {templePoints} = this.state;
        for(let stoneIndex = 0; stoneIndex < stones.length; stoneIndex++){
            if(!(templePoints[stones[stoneIndex]])){
                templePoints[stones[stoneIndex]] = 1
            } else{
                templePoints[stones[stoneIndex]]++
            }
        }
        console.log('points!', this.state.templePoints);
        this.setState({
            templePoints
        });
    }

    render(){
        return(            
        <div className="templeContainer">
            <div className="harborContainer">
                <button onClick={()=>{
                    this.addStonesToArray(this.dummydata);
                }}>Harbor</button>
            </div>
            <div className="temple2Container">
            <button onClick={this.calculateTemplePoints}>Points</button>
                <div className="TempleBlockContainer">
                    {this.MapThroughStones()}
                </div>
            </div>
        </div>
        )
    }
}

export default Temple;

