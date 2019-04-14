import React, {Component} from 'react';
import '../assets/css/app.scss';
import Players from './players';
import Ship from './ships';
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
        modalOpen: false,

        //temple
        temple: [],
        templeStoneArray: [],
        templeDock:false,
        templeStonePlacement: 0,
        templeCount: {
            black: 0
        },
        templePoints: {}
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
        newPlayer.push(<Players key={name} {...playerData} openModal={this.openModalTest}/>);
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
            newShips.push(<Ship key={i} index={i} blocks={shipsArray[i]} moveBlock={this.moveBlock.bind(this)}/>);
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

    async moveBlock(currentShip){
        if(this.checkPlayerBlock()){
            let {players, currentPlayer, shipsArray} = this.state;
            const newBlockArray = players[currentPlayer].blocks.slice(1);
            const movingBlock = [...players[currentPlayer].blocks].shift();
            const newShipArray = [...shipsArray[currentShip], movingBlock];
            const newShipsArray = [...shipsArray];
            newShipsArray[currentShip] = newShipArray;
            const newPlayerObject = {...players[currentPlayer], ['blocks']: newBlockArray};
            const newPlayerArray = [...players];
            newPlayerArray[currentPlayer] = newPlayerObject;
            await this.setState({
                players: newPlayerArray,
                shipsArray: newShipsArray
            })
            this.createShipElement();   
        }
    }
    //destination
    checkShipBlock(shipIndex){
        // debugger;
        const {shipsArray} = this.state;
        if(shipsArray[shipIndex].length > 0){
            return true;
        }else{
            return false;
        }
    }


    //temple
    async moveShipBlock(shipIndex){
        // debugger;
        if(this.checkShipBlock(shipIndex) && !this.state.templeDock){
        let {ships, shipsArray, destinationArray, templeStoneArray, templeStonePlacement} = this.state;
            const movingShipArray = ships[shipIndex];
            const newShipsArray = [...ships];
            newShipsArray[shipIndex] = 0;

            const newDestinationArray = destinationArray;
            newDestinationArray[shipIndex] = movingShipArray;

            const movingShipBlockArray = shipsArray[shipIndex];
            const newShipBlocksArray = [...shipsArray];
            newShipBlocksArray[shipIndex] = [];
            const newTempleStoneArray = templeStoneArray;
            for(let index = 0; index < movingShipBlockArray.length; index++){
                if(templeStoneArray.length < 5){
                    newTempleStoneArray.push(movingShipBlockArray[index]);
                } else {
                    newTempleStoneArray[templeStonePlacement] = movingShipBlockArray[index];
                    templeStonePlacement++
                    if(templeStoneArray === 5){
                        templeStonePlacement = 0;
                    }
                }
                this.countTempleBlocks(movingShipBlockArray[index]);
                console.log('moving ships', movingShipBlockArray[index]);
            }            
            console.log('value of newshiparray', newDestinationArray);
            await this.setState({
                ships: newShipsArray,
                shipsArray: newShipBlocksArray,
                templeDock: true,
                destinationArray: newDestinationArray,
                templeStoneArray: newTempleStoneArray,
                templeStonePlacement
            });
        }
    }

    countTempleBlocks(templeBlocks){
        debugger;
        let {templeCount} = this.state;
        let newtempleCount = templeCount;
        const color = templeBlocks.props['color']
            if(!(templeCount[color])){
                this.setState({
                    templeCount: {...templeCount, [color] : 1}
            })
        } 
    }

    // calculateTemplePoints(){
    //     let {templeStoneArray, templePoints} = this.state;
    //     for(let index = 0; index < templeStoneArray.length; index++){
            
    //     }
    // }

    render(){

        console.log(this.state.templeCount);
        const {ships, playersArray, modalOpen, templeStoneArray} = this.state;
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                <Modal open={modalOpen} close={this.closeModalTest}>
                    <h1 className="center">Player's Cards</h1>
                    <div className="row">
                        <div className="modal-content col s12">User's cards go here</div>
                    </div>
                </Modal>
                {playersArray}
                {ships}
                <div className="overallDestinationContainer">
                    <Temple moveShipBlock = {this.moveShipBlock.bind(this)} shipIndex = {0} templeArray={templeStoneArray}/>
                </div>
            </div>    
        )
    }

}

// async moveBlock(currentShip){
//     if(checkShipBlock()){
//         let {players, currentPlayer, shipsArray} = this.state;
//         const newBlockArray = players[currentPlayer].blocks.slice(1);
//         const movingBlock = [...players[currentPlayer].blocks].shift();
//         const newShipArray = [...shipsArray[currentShip], movingBlock];
//         const newShipsArray = [...shipsArray];
//         newShipsArray[currentShip] = newShipArray;
//         const newPlayerObject = {...players[currentPlayer], ['blocks']: newBlockArray};
//         const newPlayerArray = [...players];
//         newPlayerArray[currentPlayer] = newPlayerObject;
//         await this.setState({
//             players: newPlayerArray,
//             shipsArray: newShipsArray
//         })
//         this.createShipElement();   
//     }
// }


export default App;
 