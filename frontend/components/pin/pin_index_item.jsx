import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const PinIndexItem = ({ pin, router, deletePin, history }) => {
  return (
    <li>
      <Link to={`/pin/${pin.id}`}>
        {pin.description}
      </Link>&nbsp;
      <Link to={`/pins/${pin.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deletePost(pin.id)}>Delete</button>
    </li>);
};

export default withRouter(PinIndexItem);
