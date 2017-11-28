import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar_container';
import PinIndexItem from '../pin/pin_index_item';
import EditBoard from './edit_board';
import Modal from 'react-modal';

class BoardShow extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({}, this.props.board, { modalIsOpen: false });
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateBoard = this.props.updateBoard.bind(this);
    this.deleteBoard = this.props.deleteBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(parseInt(this.props.match.params.boardId));
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.boardId !== nextProps.match.params.boardId) {
      this.props.fetchBoard(nextProps.match.params.boardId);
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

  render () {
    const board = this.props.board;
    const user = board.creator || board.creator_id;
    const pins = this.props.pins;

    if (!board.id) {
      return (
        <div className="board-show-page">
          <div>
            <header>
              <NavBar />
            </header>
            <div class="load">
              <div class="loading" />
            </div>
          </div>
        </div>
      );
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
          height                     : '310px',
        }
      }
    const privateBoard = () => {
      if (board.secret) {
        return <div id="secret">This board is secret (only you can view it!)</div>
      }
    };

    return (
        <div className="board-show-page">
          <div>
            <header>
              <NavBar />
            </header>
            <div className="board-details">

              <div className={(this.props.currentUser.id === user.id) ? "board-edit-form" : "hidden"} >
                <div onClick={this.openModal} className="edit-button" />
                <Modal
                  style={modalStyle}
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal} >

                  <div onClick={this.closeModal} className='clickable' style={{float: "right"}}>X</div>
                  <EditBoard board={ board }
                    updateBoard={this.updateBoard}
                    deleteBoard={this.deleteBoard}/>
                </Modal>
              </div>
              <div className="board-info">
                <h2 className="title-header">
                  {board.name}
                </h2>
                <h3>Created by:{' '}
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </h3>

                  {privateBoard()}

                <p>
                  {pins.length}{' '} Pins
                </p>

                <h5>
                  {board.description}
                </h5>

                <Link to={`/users/${user.id}`}>
                  <div className="profile-avatar">
                    <img src={user.avatar_url} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="index-pins">
              <ul className="pin-index-list">
                {
                  pins.map(pin => (
                    <PinIndexItem
                      key={pin.id}
                      pin={pin} />
                  ))
                }
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default BoardShow;
