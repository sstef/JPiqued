import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const PinIndexItem = ({ pin, router, deletePin, history }) => {
  return (
    <li>
      <Link to={`/pins/${pin.id}`}>
        {pin.description}
      </Link>;
      <Link to={`/pins/${pin.id}/edit`}>
        Edit
      </Link>
      <button onClick={() => deletePin(pin.id)}>Delete</button>
    </li>
  );
};

export default withRouter(PinIndexItem);
