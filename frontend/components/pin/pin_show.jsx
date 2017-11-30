import React from 'react';
import { Link, Navigation, withRouter } from 'react-router-dom';
import NavBar from '../navbar_container';
import isEmpty from 'lodash/isEmpty';
import PinIndexItem from './pin_index_item';
import PinEditForm from './edit_pin';
import Modal from 'react-modal';
import find from 'lodash/find';

class PinShow extends React.Component {
  constructor(props){
    super(props);
    this._relatedPins = this._relatedPins.bind(this);
    this.state = Object.assign({}, this.props.pin, { modalIsOpen: false });
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null;
    body.style.backgroundColor = "#EDEDED";
    window.scrollTo(0, 0);
  }


  componentDidMount() {
    this.props.fetchPins();
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pinId !== nextProps.match.params.pinId) {
      this.props.fetchPin(nextProps.match.params.pinId);
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  _handleClick(){
    this.setState({modalOpen:true});
  }

  _relatedPins(){
    const pin = this.props.pin;

    const rel_pins = [];
    this.props.pins.forEach((rel_pin) => {
      if (rel_pin.category === pin.category) {
        rel_pins.push(rel_pin);
      }
    });

    return(
      <ul className="pin-index-list">
        {
          rel_pins.map(pin => (
            <PinIndexItem
              key={pin.id}
              deletePin={this.deletePin}
              pin={pin} />
          ))
        }
      </ul>
    );
  }


  render () {
    const pin = this.props.pin;
    if (!pin) {
      return <div class="load"><div class="loading" /></div>;
    }

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
        top                        : '40%',
        left                       : '8%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '15px',
        outline                    : 'none',
        padding                    : '20px',
        width                      : '200px',
        height                     : '305px',
      }
    }

    return (
        <div className="pin-show-page">
            <div onClick={this.props.history.goBack} className="index-link clickable">X</div>

            <div className="pin-details">
              <h2 className={pin.title ? "title-header" : "hidden"}>
                {pin.title}
              </h2>



              <img src={pin.image_url} />
            <div className="interactive-pin-buttons">
              <div onClick={this.openModal} className={(this.props.currentUser.id === this.props.pin.creator_id) ? "edit-button" : "hidden"}>
                <Modal
                    style={modalStyle}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal} >

                    <button onClick={this.closeModal} className='clickable' style={{float: 'right'}}>X</button>
                    <PinEditForm pin={ this.props.pin }
                      updatePin={this.props.updatePin.bind(this)}
                      closeModal={this.closeModal.bind(this)}/>
                  </Modal>
              </div>

              <a href={pin.link_url} target="_blank">
                <div className="pin-show-link-button clickable">Visit</div>
              </a>

              </div>
                <div style={{fontSize: '20px', marginTop: '55px'}}>
                  <p style={{marginBottom: '15px'}}>{pin.description}</p>
                  <p style={{marginBottom: '15px'}}>Marked as: {pin.category}</p>
                  <div className="pin-show-user-info">
                    <h5>Pinned by:{' '}
                      <Link to={`/users/${pin.creator_id}`}><strong>
                        {pin.creator}</strong></Link> on
                     <Link to={`/${pin.creator.split(' ').join("_")}/board/${pin.board.id}`} >
                       <strong> {pin.board.name}</strong></Link>
                    </h5>
                  </div>
                </div>
              </div>

            <div className="index-pins">
              <h3>Related</h3>
              {this._relatedPins()}
            </div>
        </div>
    );
  }
}

export default withRouter(PinShow);
