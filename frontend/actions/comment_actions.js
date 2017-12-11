import * as CommentUtil from '../util/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComment = comment => dispatch => {
  return CommentUtil.fetchComment(comment).then(comment => dispatch(receiveComment(comment)))
};

export const createComment = comment => dispatch => {
  return CommentUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
};

export const deleteComment = commentId => dispatch => {
  return CommentUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)))
};

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});
