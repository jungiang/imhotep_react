import React, { Component } from 'react';
import Modal from './modal';

class Dashboard extends Component {
    state = {
        show: false
    }

    showModal = () => {
        console.log("clicked!");
        this.setState({
            show: true
        });
    }

    hideModal = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <main>
                <h1>Modal</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
                    <p>the modal works!!</p>
                <button onClick={this.showModal} type="button" className="btn btn-large red">Show Modal</button>
            </main>
        )
    }
}

export default Dashboard;