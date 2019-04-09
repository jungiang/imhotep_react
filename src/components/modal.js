import React, { Component } from 'react';

class Modal extends Component {
    state = {
        show: false
    }

    render() {
        const { handleClose, children } = this.props;
        if (this.state.show){
            this.setState({
                show: true
            });
            var toggleClass = "modal display-block"
        } else {
            var toggleClass = "modal display-none"
        }
        debugger;
        return (
            <div className={toggleClass}>
                <section className="modal-main">
                    {children}
                    <button onClick={handleClose}>close</button>
                </section>
            </div>
        );
    }
};

export default Modal;