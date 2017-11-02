import React from 'react';
import { Link, Navigation } from 'react-router-dom';
import NavBar from '../navbar_container';
import isEmpty from 'lodash/isEmpty';
import PinIndexItem from './pin_index_item';
import PinEditForm from './edit_pin';
import Modal from 'react-modal';

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
    body.style.backgroundImage = null
    body.style.backgroundColor = "#EDEDED"
  }


  componentDidMount() {
    this.props.fetchPins();
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
    if (!this.props) {
      return (<div></div>);
    }
    const related = [];
    const rel_pins = [];
    for (var keyword in this.props.pin.keywords) {
      this.props.pins.forEach((rel_pin) => {
        let rel_keywords = Object.values(rel_pin.keywords)
        if (rel_keywords.includes(keyword.text)) related.push(rel_pin);
      });
    }
    const list = isEmpty(related) ? this.props.pins : this.related;

    return(
      <ul className="pin-index-list">
        {
          list.map(pin => (
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
      return <div>Loading...</div>;
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
        height                     : '300px',
      }
    }

    return (
        <div className="pin-show-page">
            <Link to="/">
              <div className="index-link clickable">X</div>
            </Link>

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

              <p>{pin.description}</p>
              <p>Marked as: {pin.keywords.map(keyword => keyword.text).join(', ')}</p>
              <div className="pin-show-user-info">
                <h5>Pinned by:{' '}
                  <strong>{pin.creator}</strong> on <strong> {pin.board_name}</strong>
                </h5>
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

export default PinShow;
