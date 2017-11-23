import { fetchUser } from '../../actions/user_actions';
import { deleteBoard, createBoard } from '../../actions/board_actions';
import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {

  const user = state.entities.users[ownProps.match.params.userId] || { pins: [], boards: [] };
  const pins = user.pins.map( id => state.entities.pins[id] );
  const boards = user.boards.map( id => state.entities.boards[id] );
  return ({
    user,
    pins,
    boards,
    currentUser: state.session.currentUser
  });
};


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  deleteBoard: id => dispatch(deleteBoard(id)),
  createBoard: board => dispatch(createBoard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
