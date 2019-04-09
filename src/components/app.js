import React, {Component} from 'react';
import '../assets/css/app.scss';
import Players from './players';

import Ship from './ship';

import CreateBlock from './createBlock';

import Temple from './temple';


class App extends Component {
    state = {
        harbor: [],
        blockList: []//block test
    }
    componentDidMount(){
        this.createHarborElement()
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

    createBlockTest(){
        const {blockList} = this.state;
        const newBlockList = [];
        newBlockList.push(<CreateBlock color="black"/>);
        this.setState({
            blockList: [...blockList, newBlockList]
        })
    }//block test
    moveBlockTest(){
        const {blockList} = this.state;
        if(blockList.length > 0){
            const block = blockList.pop();
            this.setState({
                blockList: [...blockList]
            })
            return block;
        }
    }

    render(){
        const {harbor, blockList} = this.state;
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                <Players />
                <div onClick={this.createBlockTest.bind(this)} className="block-test-area">
                    {blockList}
                </div>{/*testing for create/add blocks*/}
                {harbor}
                <Temple/>
            </div>    
        )
    }
}


export default App;
