import { fetchPin } from '../../actions/pin_actions';
import { connect } from 'react-redux';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.pinId]
});

const mapDispatchToProps = dispatch => ({
  fetchPin: id => dispatch(fetchPin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
