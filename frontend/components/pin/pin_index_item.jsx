import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const PinIndexItem = ({ key, pin, router, history }) => {

  return (
    <li key={key}>
      <div className="pin-index-item">
        <Link to={`/pins/${pin.id}`} style={{cursor:'zoom-in'}} >
          <img src={pin.image_url} />
        </Link>
      </div>
    </li>
  );
};

export default withRouter(PinIndexItem);
