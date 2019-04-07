import React, {Component} from 'react';


class Temple extends Component {
        state={
            'stones': [], 
            'stoneReplacementPos': 0,
            'docked': false,
            'playersStoneCount':{},
            'color': [],
            'templePoints': {}
        };
        
    addStonesToArray=()=>{
        // debugger;
        const {stones} = this.state;
        let {stoneReplacementPos} = this.state;
        const shipBlocks = ['red', 'black', 'green'] //dummydata
        for( let index = 0; index < shipBlocks.length; index++){
            if(this.state.stones.length < 5){
                const currentStonesArray = stones;
                currentStonesArray.push(shipBlocks[index]);
                this.setState({
                    stones: currentStonesArray
                });
            } else {
            const newStonesArray = stones;
            if(stoneReplacementPos < 5){
                newStonesArray[stoneReplacementPos] = shipBlocks[index];
            } else{
                newStonesArray[0] = shipBlocks[index];
                stoneReplacementPos = 0;
            }
            this.setState({
                'stones': newStonesArray,
                stoneReplacementPos: ++stoneReplacementPos
            })
        }
        // this.colorBlocks(shipBlocks[index])
        this.addPlayerCounter(shipBlocks[index]);

        }
    }


    addPlayerCounter(color){
        const {playersStoneCount} = this.state;
        if(!(playersStoneCount[color])){
            playersStoneCount[color] = 1
        } else{
            playersStoneCount[color] += 1;
        }
        this.setState({
            playersStoneCount
        });
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
        this.setState({
            templePoints
        });
    }

    createTempleBlock(){

    }

    render(){
        console.log('stones', this.state.stones);
        console.log('stonecount', this.state.playersStoneCount);
        console.log('templePoints', this.state.templePoints);
        return(            
        <div className="temple">
            <div className="blockContainer">
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>  
                <button onClick={this.addStonesToArray} >add stone</button>
                <button onClick={this.calculateTemplePoints}>Calc Pts End of Round</button>
            </div>
        </div>
        )
    }
}

export default Temple;