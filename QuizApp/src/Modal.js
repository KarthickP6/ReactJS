import React, { Component } from 'react';
import './App.css'
class Modal extends Component {


    render() {
        const showHideModal = this.props.show===true?"modal display-block":"modal display-none"
        console.log(showHideModal)
        return (
            <div className={showHideModal}>
                {this.props.children}
                
                Modal opened
                <button onClick={this.props.closeModal}>Close</button>
            </div>
        );
    }
}

export default Modal;