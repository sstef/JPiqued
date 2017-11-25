import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import Modal from 'react-modal';
import Tabs from './tabs';
import NavBar from '../navbar_container';
import PinIndexItem from '../pin/pin_index_item';
import BoardIndexItem from '../board/board_index_item';
import BoardForm from '../board/board_form';

class UserShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.getUserPins = this.getUserPins.bind(this);
    this.getUserBoards = this.getUserBoards.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal(e) {
    e.stopPropagation();
    this.setState({modalIsOpen: false});
  }

  _handleClick(){
    this.setState({modalOpen:true});
  }

  getUserBoards(){
    // if (this.props.boards.length < 1) {
    //   return <div></div>
    // }
    // for(board in this.props.boards) {
    //   board[pin_ids].map(id => this.props.pins[id] );
    // };
    // boards.forEach(board => board = Object.assign({}, board, {author: user.name}));

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
    return(
      <ul className="pin-index-list">
        <li className={(this.props.currentUser.user.id === this.props.user.id) ? "create-board" : "hidden"}
          onClick={this.openModal} >
            <div className="add-board">
              <h2>+</h2>
              <h4>Create Board</h4>
            </div>
              <Modal
                style={modalStyle}
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal} >

                <button onClick={this.closeModal}
                  className='clickable'
                  style={{float: 'right'}}>X</button>
                <BoardForm formType={'Create'} action={this.props.createBoard}/>
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
    if (user.boards === []) return <div>Loading...</div>;

    const panes = [
      {title: 'Boards', content: this.getUserBoards() },
      {title: 'Pins', content: this.getUserPins() }
    ]


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
      <div className="user-show-page">
        <header>
          <NavBar props={this.props} />
        </header>

        <section className="user-info">
          <article id="following-info">
            <h1>{user.name}</h1>
            <p>Follows: <strong>{user.follows ? user.follows.length : 0}</strong>
              <br />
               Following: <strong>0</strong></p>

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
