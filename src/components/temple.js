import React, {Component} from 'react';


class Temple extends Component {
        state={
            'stones': [], //will have length of 5
            'stoneReplacementPos': 0,
            'docked': false,
            'players':{},
            'color': []
        };
        
    addStonesToArray=()=>{
        const {stones} = this.state;
        let {stoneReplacementPos} = this.state;
        const shipBlocks = ['red', 'blue', 'red'] //dummydata
        // this.stoneColor = this.currentStone.css('background-color'); //currentlu jquery. how will we change set in react?
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
                this.setState({
                    stones: newStonesArray,
                    stoneReplacementPos: ++stoneReplacementPos
                })
            } else{
                newStonesArray[0] = shipBlocks[index];
                this.setState({
                    stones: newStonesArray,
                    stoneReplacementPos: 0
                })
            }
        }
        this.colorBlocks(shipBlocks[index])
        this.addPlayerCounter(shipBlocks[index]);

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

    colorBlocks(color){
        const stoneElement = <div className="blockTest" style='background-color:{$color}'></div>
    }

    render(){
        console.log(this.state.stones)
        return(            
        <div className="temple">
            <div className="blockContainer">
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>  
                <button onClick={this.addStonesToArray} >add stone</button>
            </div>
        </div>
        )
    }
}

export default Temple;