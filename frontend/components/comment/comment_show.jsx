import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const CommentShow = ({ key, comment }) => {
  return (
    <li key={key} style={{height: '60px'}}>
      <div className="comment-index-item" style={{position: 'relative', marginBottom: '10px'}}>
        <Link to={`/users/${comment.user.id}`} className="comment-author">
          <img src={comment.user.avatar_url} style={{borderRadius:'20px', marginLeft: '25px'}}/>
          <h6>{comment.user.name}</h6>
        </Link>
        <div className="comment-body">
          {comment.body}
        </div>
      </div>
    </li>
  );
};

export default withRouter(CommentShow);
