import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './tabs';
import NavBar from '../navbar_container';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser( parseInt(this.props.match.params.userId) );
  }

  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null
    body.style.backgroundColor = "#EDEDED"
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users});
  }

  getUserPins(){

  }

  render () {
    const user = this.props.user;
    if (!user) {
      return <div>Loading...</div>;
    }

    const panes = [
      {title: 'Boards', content: 'boards placeholder'},
      {title: 'Pins', content: 'pins placeholder'}
    ]
    return (
      <div className="user-show-page">
        <header>
          <NavBar props={this.props} />
        </header>

        <section className="user-info">
          <article id="following-info">
            <h1>{user.name}</h1>
            <p>Follows: {user.follows ? user.follows.length : 0}
               Following: XXXXX</p>
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
