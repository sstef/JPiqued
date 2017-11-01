import { logoutAction } from '../actions/session_actions';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import UserEditForm from './user/user_edit';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutAction()),
    updateUser: user => dispatch(updateUser(user)),
  };
};

class NavBar extends React.Component {
  // Handling the outside clicks is code thanks to Lars Graubner
  // you can view the article here: https://larsgraubner.com/handle-outside-clicks-react/
  constructor(props){
      super(props);
      this.state =  Object.assign({}, this.props, {isOpen: false, modalIsOpen: false});
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

 closeModal() {
     this.setState({modalIsOpen: false});
   }

  toggleDropdown () {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleClick(){
      if (!this.state.isOpen) {
       document.addEventListener('click', this.handleOutsideClick, false);
     } else {
       document.removeEventListener('click', this.handleOutsideClick, false);
     }

     this.toggleDropdown()
  }

  handleOutsideClick (e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    if (!this.props.currentUser){
      return <div></div>;
    };

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
          top : '59px',
          left: 'none',
          bottom                     : '59px',
          right                      : '-1px',
          border                     : '1px solid #ccc',
          background                 : '#fff',
          overflow                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderBottomLeftRadius     : '15px',
          outline                    : 'none',
          padding                    : '20px',
          width                      : '250px',
          height                     : '450px',
        }
      }

    return (
        <div className="navigation-header">
          <div className="navlogo-container clickable">
            <Link to='/'>
              <div className="logo"></div>
            </Link>
          </div>

          <div className="searchbar">
            Placeholder for search
          </div>

          <div className="user-dropdown clickable"
            onClick={this.handleClick}
            ref={node => { this.node = node; }} >

            <img src={this.props.currentUser.avatar_url} />
            {this.props.currentUser.name.split(' ')[0]}
          </div>

            <div className={(this.state.isOpen) ? "dropdown" : "hidden"}>

              <Link to={`/users/${this.props.currentUser.id}`} >
                <h1>Go to Profile</h1>
              </Link>
              <br />

              <div className="edit-account" >
                  <div onClick={this.openModal} className="account-button">Edit Account</div>
                    <Modal
                      style={modalStyle}
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal} >

                      <button onClick={this.closeModal}>close</button>
                      <UserEditForm user={ this.props.currentUser } updateUser={() => this.props.updateUser} />
                    </Modal>
                </div>

                <br />
              <div onClick={this.props.logout} className="logout-button">
                Logout
              </div>

            </div>

        </div>
      );
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
