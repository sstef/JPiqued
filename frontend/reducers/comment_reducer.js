import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_PIN } from '../actions/pin_actions';
import merge from 'lodash/merge';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMMENTS:
      return merge({}, state, action.comments);
    case RECEIVE_COMMENT:
      return merge({}, state, action.comment);
    case RECEIVE_PIN:
      const pinComments = {};
      if (action.pin.comments) {
        action.pin.comments.forEach( comment => {
          pinComments[comment.id] = comment
        });
      }
      return merge({}, pinComments);
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default CommentReducer;
