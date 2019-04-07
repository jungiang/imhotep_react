import React, {Component} from 'react';
import '../assets/css/app.scss';
import Ship from './ship';
import CreateBlock from './createBlock';

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
            newHarbor.push(<Ship key={i}/>);
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
        
    }
    render(){
        const {harbor, blockList} = this.state;
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                <div onClick={this.createBlockTest.bind(this)} className="block-test-area">
                    {blockList}
                </div>{/*testing for create/add blocks*/}
                {harbor}
            </div>    
        )
    }
};

export default App;
