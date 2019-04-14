import React, { Component } from 'react';
import '../assets/css/app.scss';

class Modal extends Component {
    componentDidMount(){
        M.Modal.init(this.modal);
    }

    render(){
        const { children, open, close } = this.props;
        if (open){
            return (
                <div ref={(element) => this.modal = element} className="modal">
                <div className="modal bottom-sheet">
                    <div className="modal-content">
                    <div className="modal-actions right">
                        <button className="btn btn-large purple close-modal" onClick={close}>Close</button>
                    </div>
                        {children}
                    </div>
                </div>
                </div>
            )
        }
        return null;
    }
}

export default Modal;
