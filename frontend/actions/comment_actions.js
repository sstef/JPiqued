import * as CommentUtil from '../util/comment_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = () => dispatch => {
  return CommentUtil.fetchComments().then(comments =>
    dispatch(receiveAllComments(comments)))
};

export const fetchComment = comment => dispatch => {
  return CommentUtil.fetchComment(comment).then(comment =>
    dispatch(receiveComment(comment)))
};

export const createComment = comment => dispatch => {
  return CommentUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
};

export const deleteComment = commentId => dispatch => {
  return CommentUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)))
};

const receiveAllComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});
