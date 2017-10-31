import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs';
import NavBar from '../navbar_container';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import PinIndexItem from '../pin/pin_index_item';
import UserEditForm from './user_edit';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({}, this.props.user, { modalIsOpen: false });
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getUserPins = this.getUserPins.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser( parseInt(this.props.match.params.userId) );
  //  this.props.fetchUserPins( parseInt(this.props.match.params.userId) );
  }

  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null;
    body.style.backgroundColor = "#EDEDED";
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

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users});
  }

  getUserPins(){
    return(
      <ul className="pin-index-list">
        {
          this.props.pins.map(pin => (
            <PinIndexItem
              key={pin.id}
              pin={pin} />
          ))
        }
      </ul>
    );
  }

  render () {
    const user = this.props.user;
    const currentUser = this.props.currentUser || {}
    
    if (user.length < 2) {
      return <div>Loading...</div>;
    }

    const panes = [
      {title: 'Boards', content: 'boards placeholder'},
      {title: 'Pins', content: this.getUserPins() }
    ]
    return (
      <div className="user-show-page">
        <header>
          <NavBar props={this.props} />
        </header>

        <section className="user-info">
          <article id="following-info">
            <h1>{user.name}</h1>
            <p>Follows: <strong>{user.follows ? user.follows.length : 0}</strong>
              <br />
               Following: <strong>XXXXX</strong></p>


             <div className={(currentUser.id === user.id) ? "edit-button" : "hidden"}>
               <div onClick={this.openModal} className="clickable">Edit</div>
                 <Modal
                   isOpen={this.state.modalIsOpen}
                   onAfterOpen={this.afterOpenModal}
                   onRequestClose={this.closeModal} >

                   <h2 ref={subtitle => this.subtitle = subtitle}>Update your profile</h2>
                   <button onClick={this.closeModal}>close</button>
                   <UserEditForm user={ user } />
                 </Modal>
             </div>

          </article>

          <div className="image-show">
            <img src={user.avatar_url} />
          </div>
        </section>

        <section className="pin-board-tabs">
          <Tabs panes={panes} />
        </section>
      </div>
    );
  }
}

export default UserShow;
