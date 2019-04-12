import React, { Component } from 'react';
import '../assets/css/app.scss';

class Modal extends Component {
    render(){
        const { children, open, close } = this.props;
        if (open){
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                    <div className="ws-modal-actions right">
                        <button className="btn btn-large purple close-modal" onClick={close}>Close</button>
                    </div>
                        {children}
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal;
