import React, {Component} from 'react';

class Temple extends Component {
    constructor(props){
        super(props);
        this.state={
            stones: [
                ['black', 'black'], //row 1
                ['white'], //row 2
                ['white'], //row 3
                ['black'], //row 4 
                ['black']  //row 5
            ],

            docked: false,
            players:{

            }
        }
    }

    addStonesToArray=()=>{
        this.stoneColor = this.currentStone.css('background-color');
        this.stonesOnTemple[this.stonesOnTemplePosition].push(this.stoneColor);
        this.stonesOnTemplePosition++;
        if(this.stonesOnTemplePosition === 4){
            this.stonesOnTemplePosition = 0;
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
        return(            
        <div className="temple">
            <div className="blockContainer"></div>
        </div>
        )
    }
}

export default Temple;