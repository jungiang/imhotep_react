import React from 'react';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';
import Players from './players';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <Players />
        </div>
    </div>
);

export default App;
