import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BoardIndexItem = ({ board, router, deleteBoard, history, pins=null, user, currentUser }) => {
  const creator = board.author.replace(/ /g, "_");
  const boardPins = board.pins || pins
  // const randomPin = boardPins[Math.floor(Math.random() * boardPins.length)];

//  TODO: Implement secret board display logic
  //
  // if ((board.secret === true) && (board.author)){
  //
  // }
  //

  return (
    <li>
      <div className="board-index-item">
<<<<<<< HEAD
      <div className="pin-index-item">
        <Link to={`/${creator}/board/${board.id}`} style={{cursor:'zoom-in'}} >
          <h3 className="board-name">{board.name}</h3>
          <img src={pins[0].image_url} className="board-default"/>
        </Link>
      </div>
=======
        <div className="pin-index-item">
          <Link to={`/${creator}/board/${board.id}`} style={{cursor:'zoom-in'}} >
            <h3 className="board-name">{board.name}</h3>
            <img src={pins[0].image_url} className="board-default"/>
          </Link>
        </div>
>>>>>>> master
      </div>
    </li>
  )
};

export default withRouter(BoardIndexItem);

<<<<<<< HEAD

=======
>>>>>>> master
// <button onClick={() => deleteBoard(board.id)} id="board-delete">Delete</button>
