import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import UserEditForm from './user_edit';

const mapStateToProps = state => ({
  user: state.entities.users[ownProps.match.params.userId],
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(UserEditForm);
