import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar_container';
import isEmpty from 'lodash/isEmpty';
import PinIndexItem from './pin_index_item';
import PinEditForm from './edit_pin_container';
import Modal from 'react-modal';

class PinShow extends React.Component {
  constructor(props){
    super(props);
    this._relatedPins = this._relatedPins.bind(this);
    this.state = Object.assign({}, this.props.pin, { modalIsOpen: false });
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null
    body.style.backgroundColor = "#EDEDED"
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

  componentDidMount() {
    this.props.fetchPins();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.pinId !== nextProps.match.params.pinId) {
      this.props.fetchPin(nextProps.match.params.pinId);
    }
  }


  getInitialModalState (){
    return({ modalOpen: false });
  }

  _handleClick(){
    this.setState({modalOpen:true});
  }

  _relatedPins(){
    // const related = {};
    const pins = this.props.pins;
    // for (keyword in this.props.pin.keywords) {
    //   pins.forEach((rel_pin) => {
    //     if (rel_pin.keywords.includes(keyword)) related.push(rel_pin);
    //   });
    // }
    //
    // const list = isEmpty(related) ? this.pins : this.related;

    return(
      <ul className="pin-index-list">
        {
          pins.map(pin => (
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

    return (
        <div className="pin-show-page">
            <Link to="/">
              <div className="index-link clickable">X</div>
            </Link>

            <div className="pin-details">
              <h2 className={pin.title ? "title-header" : "hidden"}>
                {pin.title}
              </h2>

              <div className="image-show">
                <img src={pin.image_url} />
              </div>

              <div className={(this.props.currentUser.name) ? "edit-button" : "hidden"}>
                <div onClick={this.openModal} className="clickable">Edit</div>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal} >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Edit this pin</h2>
                    <button onClick={this.closeModal}>close</button>
                    <PinEditForm pin={ pin } />
                  </Modal>
              </div>

              <div className="pin-show-link-button clickable">
                <a href={pin.link_url} target="_blank">Visit</a>
              </div>

              <p>{pin.description}</p>
              <p>Marked as: {pin.keywords}</p>
              <div className="pin-show-user-info">
                <h5>Pinned by: <strong>{pin.creator_id}</strong> on
                  <strong>{pin.board_id}</strong></h5>
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
