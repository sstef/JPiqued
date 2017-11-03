import PinIndex from './pin_index'
import { connect } from 'react-redux';
import { fetchPins, deletePin, fetchPin, createPin } from '../../actions/pin_actions';


const mapStateToProps = state => {
  return({
    pins: Object.keys(state.entities.pins).map(id => state.entities.pins[id]),
    boards: state.session.currentUser.boards.map(id => state.entities.boards[id]),
    currentUser: state.session.currentUser,
  })
};

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
  fetchPins: () => dispatch(fetchPins()),
  deletePin: id => dispatch(deletePin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinIndex);
