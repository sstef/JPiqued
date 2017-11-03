import { fetchPins, fetchPin, updatePin } from '../../actions/pin_actions';
import { connect } from 'react-redux';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
  return({
    boards: state.session.currentUser.boards.map(id => state.entities.boards[id]),
    pin: state.entities.pins[ownProps.match.params.pinId],
    pins: Object.keys(state.entities.pins).map(id => state.entities.pins[id]),
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  fetchPin: id => dispatch(fetchPin(id)),
  updatePin: pin => dispatch(updatePin(pin)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
