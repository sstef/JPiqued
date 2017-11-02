import { updateBoard } from '../../actions/board_actions';
import { connect } from 'react-redux';
import merge from 'lodash/merge';

const mapDispatchToProps = dispatch => ({
  updateBoard: board => dispatch(updateBoard(board))
});

default connect(null, mapDispatchToProps)(PinItemForm);

const PinIt = ({ board, pin }) => {

  let board = merge({}, board, )
}

const PinItemForm = (...props) => {
  this.user = this.props.currentUser;
  this.pinId = this.props.match.params.pinId;
  this.pin = this.props.pins(this.pinId);

  return(


  )
}
