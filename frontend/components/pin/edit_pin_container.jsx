import { connect } from 'react-redux';
import { updatePin } from '../../actions/pin_actions';
import PinEditForm from './edit_pin';

const mapStateToProps = state => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
});

const mapDispatchToProps = dispatch => ({
  updatePin: pin => dispatch(updatePin(pin))
});

export default connect(
  null,
  mapDispatchToProps
)(PinEditForm);
