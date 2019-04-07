import React, {Component} from 'react';


class Temple extends Component {
        state={
            stones: ['black', 'black', 'black', 'black'], //will have length of 5
            stoneReplacementPos: 0,
            docked: false,
            players:{
                'player1StoneCount': 0, //player count will vary using 2 as dummy data
                'player2StoneCount': 0,
            }
        };
        

    addStonesToArray=()=>{
        const {stones} = this.state;
        let {stoneReplacementPos} = this.state;
        const shipBlocks = ['red', 'blue', 'green'] //dummydata
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
        }
    }


    calculate(){
        const {stones} = this.state;
        for (let index = 0; index < stones.length; index++){
            const lastStoneInArray = stones[index][stones[index].length-1];
            if(lastStoneInArray === 'black'){ //color
                blackpoint++; //add point
            }
        }
    }

    render(){
        console.log(this.state.stones)
        return(            
        <div className="temple">
            <div className="blockContainer">
                <div className=" red blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>
                <div className="blockTest"></div>  
                <button onClick={this.addStonesToArray} >add stone</button>
                <button onClick={this.calculate}>calculate</button>
            </div>
        </div>
        )
    }
}

export default Temple;