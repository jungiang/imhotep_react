import React, {Component} from 'react';
import '../assets/css/app.scss';
import Players from './players';

import Ship from './ship';

import CreateBlock from './createBlock';

import Temple from './temple';


class App extends Component {
    state = {
        players: [],
        harbor: [],
        blockList: [],//block test
        currentPlayer: null
    }
    componentDidMount(){
        this.createHarborElement();
        this.createPlayerElement(4);
        this.setState({
            currentPlayer: players[0]
        })
    }
    createPlayerElement(number){
        const {players} = this.state;
        const newPlayer = [];
        for(let i = 0; i < number; i++){
            newPlayer.push(<Players key={i} checkPlayerBlock={this.checkPlayerBlock.bind(this)}/>);
        }
        this.setState({
            players: [...players, newPlayer]
        })
    }
    createHarborElement(){
        const {harbor} = this.state;
        const newHarbor = [];
        for(let i = 0; i < 4; i++){
            newHarbor.push(<Ship key={i} moveBlockTest={this.moveBlockTest.bind(this)}/>);
        }
        this.setState({
            harbor: [...harbor, newHarbor]
        })
    }
    checkPlayerBlock = block=>{
        return block;
    }
    createBlockTest(){
        const {blockList} = this.state;
        const newBlockList = [];
        newBlockList.push(<CreateBlock color="black"/>);
        this.setState({
            blockList: [...blockList, newBlockList]
        })
    }//block test
    moveBlockTest(){
        // const clickedShip = clickedShip;
        const {currentPlayer} = this.state;
        const block = currentPlayer.checkPlayerBlock();
        if(!block){
            alert('player has no blocks');
        }
        return block;
        // if(block){
        //     const block = blockList.pop();
        //     this.setState({
        //         blockList: [...blockList]
        //     })
        //     return block;
        // }
    }
    shipDockedToDestination(){
        
    }
    render(){
        const {harbor, blockList} = this.state;
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                <Players checkPlayerBlock={this.checkPlayerBlock.bind(this)}/>
                <div onClick={this.createBlockTest.bind(this)} className="block-test-area">
                    {blockList}
                </div>{/*testing for create/add blocks*/}
                {harbor}
                <Temple shipDocked={this.shipDockedToDestination.bind(this)}/>
            </div>    
        )
    }
}


export default App;
