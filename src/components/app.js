import React, {Component} from 'react';
import '../assets/css/app.scss';
import Players from './players';
import Ship from './ship';
import CreateBlock from './createBlock';
import Temple from './temple';
import Modal from './modal';

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
        ships: [],
        shipsArray: [
            [],
            [],
            [],
            []
        ],
        destinationArray: [],
        destinationArrayBlocks: [
            [],
            [],
            [],
            [],
            []
        ],
        currentPlayer: 0,
        initialBlockCount: 2,
        blockId: 1,
        modalOpen: false

    }
    componentDidMount(){
        this.createShipElement();
        this.createPlayerElement('David', 'black');
        // this.gameStart();
    }
    // gameStart(){
    //     const {players} = this.state;
    //     this.setState({
    //         currentPlayer: players[0]
    //     })
    // }
    changePlayerTurn(){

    }
    createPlayerElement(name, color, icon){
        const {players, playersArray, initialBlockCount} = this.state;
        const playerBlocks = this.createBlocks(initialBlockCount, color);
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
            playersArray: [...playersArray, newPlayer],
            initialBlockCount: initialBlockCount + 1
        })
    }
    createBlocks = (amount, color) => {
        let {blockId} = this.state;
        const blockArray = [];
        for(let i = 0; i < amount; i++){
            blockArray.push(<CreateBlock key={blockId} color={color}/>);
            blockId++;
            this.setState({
                blockId
            })
        }
        return blockArray;
    }
    createShipElement(){
        const {shipsArray} = this.state;
        const newShips = [];
        for(let i = 0; i < 4; i++){
            newShips.push(<Ship key={i} blocks={shipsArray[i]} moveBlock={this.moveBlock.bind(this)}/>);
        }
        this.setState({
            ships: [...newShips]
        })
    }
    checkPlayerBlock(){
        const {players, currentPlayer} = this.state;
        if(players[currentPlayer].blocks.length > 0){
            return true;
        }else{
            return false;
        }
    }
    openModalTest = () => {
        this.setState({
            modalOpen: true
        });
    }

    closeModalTest = () => {
        this.setState({
            modalOpen: false
        });
    }

    moveBlock(){
        if(this.checkPlayerBlock()){
            let {players, currentPlayer, shipsArray} = this.state;
            const newBlockArray = players[currentPlayer].blocks.slice(1);
            const movingBlock = [...players[currentPlayer].blocks].shift();
            const newShipArray = [...shipsArray[currentPlayer], movingBlock];
            const newShipsArray = [...shipsArray];
            newShipsArray[currentPlayer] = newShipArray;
            const newPlayerObject = {...players[currentPlayer], ['blocks']: newBlockArray};
            const newPlayerArray = [...players];
            newPlayerArray[currentPlayer] = newPlayerObject;
            this.setState({
                players: newPlayerArray,
                shipsArray: newShipsArray
            })
            this.createShipElement();   
        }
    }
    shipDockedToDestination(){
        
    }
    render(){
        const {ships, blockList, playersArray, modalOpen } = this.state;
        console.log(this.state);
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                <Players openModal={this.openModalTest}/>
                <div onClick={this.createBlocks} className="block-test-area">
                    {blockList}
                </div>{/*testing for create/add blocks*/}
                {ships}
                <Temple/>
                <Modal open={modalOpen} close={this.closeModalTest}>
                    <h1 className="center">Player's Cards</h1>
                    <div className="row">
                        <div className="modal-content col s12">User's cards go here</div>
                    </div>
                </Modal>
                {playersArray}
                <div onClick={this.createBlock} className="block-test-area">
                    {blockList}
                </div>{/*testing for create/add blocks*/}
                {ships}
                <Temple shipDocked={this.shipDockedToDestination.bind(this)}/>
            </div>    
        )
    }
}


export default App;
