import PinIndex from './pin_index'
import { connect } from 'react-redux';
import { fetchPins, deletePin } from '../../actions/pin_actions';

const mapStateToProps = state => {
  pins: Object.keys(state.pins).map(id => state.pins[id])
};

const mapDispatchToProps = dispatch => {
  fetchPins: () => dispatch(fetchPins()),
  deletePin: id => dispatch(deletePin(id))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinIndex);
