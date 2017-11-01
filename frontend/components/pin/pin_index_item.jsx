import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const PinIndexItem = ({ key, pin, router, deletePin, history }) => {
  return (
    <li key={key}>
      <div className="pin-index-item">
        <Link to={`/pins/${pin.id}`} style={{cursor:'zoom-in'}} >
          <img src={pin.image_url} />
        </Link>
        <button onClick={() => deletePin(pin.id)}>Delete</button>
      </div>
    </li>
  );
};

export default withRouter(PinIndexItem);
