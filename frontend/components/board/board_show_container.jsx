import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { createPin } from '../../actions/pin_actions';
import { connect } from 'react-redux';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  let board = state.entities.boards[parseInt(ownProps.match.params.boardId)] || {pin_ids:[], pins: []};
  let pinns = (board.pin_ids) ? board.pin_ids.map(id => state.entities.pins[id]) : board.pins;

  return({
    board,
    pins: pinns,
    user: state.entities.users,
    currentUser: state.session.currentUser.user,
});};

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  createPin: pin => dispatch(createPin(pin)),
  deletePin: id => dispatch(deletePin(id)),
  updateBoard: id => dispatch(fetchBoard(id)),
  deleteBoard: id => dispatch(deleteBoard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
