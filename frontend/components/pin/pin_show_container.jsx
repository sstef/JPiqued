import { fetchPins } from '../../actions/pin_actions';
import { connect } from 'react-redux';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
  pins: Object.keys(state.entities.pins).map(id => state.entities.pins[id]),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  fetchPin: () => dispatch(fetchPin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
