import { connect } from 'react-redux';
import { updateBoard } from '../../actions/board_actions';
import BoardEditForm from './edit_board';

const mapDispatchToProps = dispatch => ({
  updateBoard: board => dispatch(updateBoard(board)),
  deleteBoard: id => dispatch(deleteBoard(id))
});

export default connect(
  null,
  mapDispatchToProps
)(BoardForm);
