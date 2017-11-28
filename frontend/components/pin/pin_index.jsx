import React from 'react';
import PinIndexItem from './pin_index_item';
import NavBar from '../navbar_container';
import PinForm from './pin_form'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import pickBy from 'lodash/pickBy';
import merge from 'lodash/merge';


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
    // this.props.fetchPins();
    let body = document.getElementById('root');
    body.style.backgroundImage = null
    body.style.backgroundColor = "#EDEDED"
  }

  componentDidMount(){
    this.props.fetchPins();
    window.scrollTo(0, 0);
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
          height                     : '455px',
        }
      }
    if (this.props.length < 1) {
      return(
        <div className="board-show-page">
          <div>
            <header>
              <NavBar />
            </header>
            <div class="load">
              <div class="loading" />
            </div>
          </div>
        </div>
      );
    }

    const boards = this.props.boards

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
            <PinForm boards={boards} createPin={this.props.createPin.bind(this)}
              closeModal={this.closeModal.bind(this)} currentUser={this.props.currentUser} />
          </Modal>
        </div>

      </div>
    );
  }
}

export default PinIndex;
