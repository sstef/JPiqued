import React from 'react'

class Modal extends React.Component {
  openModal (){
    this.setState({ openModal: true });
  }

  closeModal () {
    this.setState({ openModal: false });
  }

  render(){
    return(
      <div className={this.props.base}>

        <div className={this.props.modalBackdrop}
          onclick={this.closeOnOverlayClick ? this.close(e) : ""}>

          <div className={this.openModal ? this.props.afterClick : "Hidden"}
            onClose={this.props.onClose}>
            {this.props.children}
          </div>

        </div>
      </div>
    )
  }

  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({ openModal: false s})
  }
}

 export default Modal;
