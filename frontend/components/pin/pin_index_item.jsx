import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const PinIndexItem = ({ key, pin, router, deletePin, history }) => {
  return (
    <li key={key}>
      <div className="pin-index-item">
        <Link to={`/pins/${pin.id}`} style={{cursor:'zoom-in'}} >
          <img src={pin.image_url} />
          <h2 style={{color: '#555', fontWeight: 'bold', width: 200,
            marginLeft: 5}}>{pin.title}</h2>
        </Link>
      </div>
    </li>
  );
};

export default withRouter(PinIndexItem);
