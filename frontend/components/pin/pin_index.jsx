import React from 'react';
import PinIndexItem from './pin_index_item';
import NavBar from '../navbar_container';
import PinFormContainer from './pin_form_container'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Modal from 'react-modal';

class PinIndex extends React.Component {
  constructor (props){
    super(props);
    this.state = { modalIsOpen: false };
    this.deletePin = this.props.deletePin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null
    body.style.backgroundColor = "#EDEDED"
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  componentWillReceiveProps(newProps){
    this.setState({pins: newProps.pins})
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  _handleClick(){
    this.setState({modalOpen:true});
  }

  render () {
    const modalStyle = {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor  : 'none',
        },
        content : {
          position                   : 'absolute',
          top : 'none',
          left: 'none',
          bottom                     : '65px',
          right                       : '25px',
          border                     : '1px solid #ccc',
          background                 : '#fff',
          overflow                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderRadius               : '15px',
          outline                    : 'none',
          padding                    : '20px',
          width                      : '250px',
          height                     : '450px',
        }
      }
      if (!this.props){
        return <div></div>
      }

    return (
      <div className="pin-index-page">
        <header>
          <NavBar props={this.props} />
        </header>
        <div className="index-pins">
          <ul className="pin-index-list">
            {
              this.props.pins.map(pin => (
                <PinIndexItem
                  key={pin.id}
                  deletePin={this.deletePin}
                  pin={pin} />
              ))
            }
          </ul>
        </div>

        <div className="add-button-wrapper">
          <div className="popover-form-button">
            <Button onClick={this.openModal}> + </Button>
          </div>
          <Modal
            style={modalStyle}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal} >

            <button onClick={this.closeModal} className='clickable' style={{float: 'right'}}>X</button>
            <PinFormContainer closeModal={this.closeModal.bind(this)} />
          </Modal>
        </div>

      </div>
    );
  }
}

export default PinIndex;
