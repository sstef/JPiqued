import { fetchPin } from '../../actions/Pin_actions';
import { connect } from 'react-redux';
import PinShow from './Pin_show';

const mapStateToProps = (state, ownProps) => ({
  pin: state.Pins[ownProps.match.params.PinId]
});

const mapDispatchToProps = dispatch => ({
  fetchPin: id => dispatch(fetchPin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
