import React, {Component} from 'react';
import '../assets/css/app.scss';
import Ship from './ship';

class App extends Component {
    state = {
        harbor: []
    }
    componentDidMount(){
        this.createHarborElement()
    }
    createHarborElement(){
        const newHarbor = [];
        for(let i = 0; i < 4; i++){
            newHarbor.push(<Ship key={i}/>);
        }
        this.setState({
            harbor: newHarbor
        })
    }
    render(){
        const {harbor} = this.state;
        return (
            <div className="header">
                <h1 className="title">Imhotep</h1>
                <h3 className="slogan">The Egyptian Game From Hell</h3>
                {harbor}
            </div>    
        )
    }
};

export default App;
