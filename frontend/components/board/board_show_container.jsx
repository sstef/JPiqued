import { fetchBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { createPin } from '../../actions/pin_actions';
import { connect } from 'react-redux';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {

  return({
    board: state.entities.boards,
    pins: state.entities.pins,
    user: state.entities.users,
    currentUser: state.session.currentUser,
});};

const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  createPin: pin => dispatch(createPin(pin)),
  updateBoard: id => dispatch(fetchBoard(id)),
  deleteBoard: id => dispatch(deleteBoard(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
