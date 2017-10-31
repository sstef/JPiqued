import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId] || { pins: [] };
  const pins = user.pins.map( id => state.entities.pins[id] );
  return ({
    user,
    pins
  });
};


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
