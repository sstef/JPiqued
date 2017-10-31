import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs';
import NavBar from '../navbar_container';
import merge from 'lodash/merge';
import PinIndexItem from '../pin/pin_index_item';
import UserEditForm from './user_edit.jsx';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUser( parseInt(this.props.match.params.userId) );
  //  this.props.fetchUserPins( parseInt(this.props.match.params.userId) );
    this.getUserPins = this.getUserPins.bind(this);
  }

  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null;
    body.style.backgroundColor = "#EDEDED";
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
    if (!user) {
      return <div>Loading...</div>;
    }
    debugger
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
