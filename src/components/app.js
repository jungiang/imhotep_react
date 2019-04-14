import React, {Component} from 'react';
import '../assets/css/app.scss';
import Players from './players';
import Ship from './ships';
import CreateBlock from './createBlock';
import Temple from './temple';
import BurialChamber from './destinations/burial_chamber';
import Obelisks from './destinations/obelisks'
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
        shipToSail: false,
        destination: [],
        destinationArray: [
            [],//bc
            [],//obelisks
            [],//temple
            [],//pyramid
            []//market
        ],
        currentPlayer: 0,
        initialBlockCount: 2,
        blockId: 1,
        modalOpen: false
    }
    async componentDidMount(){
        this.createShipElement();
        await this.createPlayerElement('Jun', 'white');
        await this.createPlayerElement('Jason', 'gray');
        await this.createPlayerElement('David', 'black');
        this.createPlayerElement('Jaime', 'brown');
        this.createDestinationElement();
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
            newShips.push(<Ship 
                key={i} 
                index={i} 
                blocks={shipsArray[i]} 
                moveBlock={this.moveBlockToShip}
                sailShip={this.shipToSail}
                />);
        }
        this.setState({
            ships: [...newShips]
        })
    }
    createDestinationElement(){
        let {destination} = this.state;
        destination.push(<BurialChamber 
            key="burial_chamber"
            index={0} 
            dockShip={this.shipDockedToDestination}
            />);
        destination.push(<Obelisks 
            key="obelisks" 
            index={1}
            dockShip={this.shipDockedToDestination}
            />);
        destination.push(<Temple shipDocked={this.shipDockedToDestination}/>);
        this.setState({
            destination
        })
    }
    checkPlayerBlock(){
        let {players, currentPlayer} = this.state;
        if(players[currentPlayer].blocks.length > 0){
            currentPlayer++;
            if(currentPlayer === players.length){
                currentPlayer = 0;
            }
            this.setState({
                currentPlayer: currentPlayer
            })
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
    moveBlockToShip = async currentShip => {
        const hasBlock = this.checkPlayerBlock();
        if(hasBlock){
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
            return hasBlock;  
        }else{
            return hasBlock;
        }
    }
    shipToSail = currentShip => {
        this.setState({
            shipToSail: currentShip
        })
    }
    shipDockedToDestination = currentDestination => {
        let {shipsArray, shipToSail, destinationArray} = this.state;
        if(shipToSail !== false){
            destinationArray[currentDestination] = [...destinationArray[currentDestination], ...shipsArray[shipToSail]];
            this.setState({
                destinationArray
            })
            return shipsArray[shipToSail];    
        }else{
            return false;
        }
    }
    render(){
        const {ships, playersArray, modalOpen, destination} = this.state;
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
                <div className="players-container">
                    {playersArray}
                </div>
                <div className="ships-container">
                    {ships}
                </div>
                <div className="destination-container">
                    {destination}
                </div>
            </div>    
        )
    }
}

export default App;
