import React, {Component} from 'react';
import '../assets/css/app.scss';
import Players from './players';
import Ship from './ship';
import CreateBlock from './createBlock';
import Temple from './temple';

class App extends Component {
    state = {
        players: [
            // {
            //     name: '',//name,
            //     color: null,//color,
            //     icon: null,//,icon
            //     blocks: []//playerBlocks    
            // }
        ],
        playersArray: [],
        shipsCargo: [
            //[{block},{block}],
            //[{block},{block}],
            //[{block},{block}],
            //[{block},{block}],
        ],
        harbor: [],
        currentPlayer: null,
        initialBlockCount: 2
    }
    async componentDidMount(){
        this.createHarborElement();
        await this.createPlayerElement('David', 'white');
        this.gameStart();
    }
    gameStart(){
        const {players} = this.state;
        this.setState({
            currentPlayer: players[0]
        })
    }
    changePlayerTurn(){

    }
    createPlayerElement(name, color, icon){
        const {players, playersArray} = this.state;
        const playerBlocks = this.determineInitialBlocks(color);
        const newPlayer = [];
        const playerData = {
            name: name,
            color: color,
            icon: icon,
            blocks: [...playerBlocks]
        }
        newPlayer.push(<Players key={name} {...playerData}/>);
        this.setState({
            players: [...players, playerData],
            playersArray: [...playersArray, newPlayer]
        })
    }
    determineInitialBlocks(color){
        const {initialBlockCount} = this.state;
        const blockArray = [];
        for(let i = 0; i < initialBlockCount; i++){
            blockArray.push(this.createBlock(color));
        }
        this.setState({
            initialBlockCount: initialBlockCount + 1
        })
        return blockArray;
    }
    createHarborElement(){
        const {harbor} = this.state;
        const newHarbor = [];
        for(let i = 0; i < 4; i++){
            newHarbor.push(<Ship key={i} moveBlockTest={this.moveBlock.bind(this)}/>);
        }
        this.setState({
            harbor: [...harbor, ...newHarbor]
        })
    }
    checkPlayerBlock(){
        const {currentPlayer} = this.state;
        if(currentPlayer.blocks.length > 0){
            return true;
        }else{
            return false;
        }
    }
    moveBlock(){
        if(this.checkPlayerBlock()){
            const {currentPlayer} = this.state;
            const block = currentPlayer.blocks[0];
            const newBlockArray = currentPlayer.blocks.slice(1);
            // this.setState({
                
            // })   
        }
    }
    createBlock(color){
        const newBlockList = [];
        newBlockList.push(<CreateBlock color={color}/>);
        return newBlockList;
    }
    shipDockedToDestination(){
        
    }
    render(){
        const {harbor, blockList, playersArray} = this.state;
        console.log(this.state);
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                {playersArray}
                <div onClick={this.createBlock.bind(this)} className="block-test-area">
                    {blockList}
                </div>{/*testing for create/add blocks*/}
                {harbor}
                <Temple shipDocked={this.shipDockedToDestination.bind(this)}/>
            </div>    
        )
    }
}


export default App;
