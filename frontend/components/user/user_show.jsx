import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import Tabs from './tabs';
import NavBar from '../navbar_container';
import PinIndexItem from '../pin/pin_index_item';
import BoardIndexItem from '../board/board_index_item';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user
    this.getUserPins = this.getUserPins.bind(this);
    this.getUserBoards = this.getUserBoards.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users});
  }

  getUserBoards(){
    // if (this.props.boards.length < 1) {
    //   return <div></div>
    // }
    // for(board in this.props.boards) {
    //   board[pin_ids].map(id => this.props.pins[id] );
    // };
    // boards.forEach(board => board = Object.assign({}, board, {author: user.name}));

    return(
      <ul className="pin-index-list">
        <li className="create-board">
            <div onClick={this.openModal} className="add-board">
              <h2>+</h2>
              <h4>Create Board</h4>
            </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal} >

                <h2 ref={subtitle => this.subtitle = subtitle}>Create a new board</h2>
                <button onClick={this.closeModal}>X</button>
                <p/>
              </Modal>
        </li>
        {
          this.props.boards.map(boardItem => {
            let board = Object.assign({}, boardItem, {author: this.props.user.name});
            return (
              <BoardIndexItem
                key={board.id}
                pins={this.props.pins}
                board={board}
                deleteBoard={this.props.deleteBoard} />
            )})
        }
      </ul>
    )
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
    const currentUser = this.props.currentUser || {};

    if (!user) {
      return <div>Loading...</div>;
    }

    const panes = [
      {title: 'Boards', content: this.getUserBoards() },
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
