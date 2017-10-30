import { logoutAction } from '../actions/session_actions';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import classes from '../../assets/stylesheets/navbar.scss'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutAction())
  };
};

class NavBar extends React.Component {
  // Handling the outside clicks is code thanks to Lars Graubner
  // you can view the article here: https://larsgraubner.com/handle-outside-clicks-react/
  constructor(props){
      super(props);
      this.state =  Object.assign({}, this.props, {isOpen: false});
      this.toggleDropdown = this.toggleDropdown.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleOutsideClick = this.handleOutsideClick.bind(this);
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

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    if (!this.props.currentUser){
      return <div></div>;
    };
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
                <h1>Go to profile</h1>
              </Link>

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
