import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BoardIndexItem = ({ board, router, deleteBoard, history, pins=null }) => {
  const user = board.author.replace(/ /g, "_");
  const boardPins = board.pins || pins
  const randomPin = boardPins[Math.floor(Math.random() * boardPins.length)];
  return (
    <li>
      <div className="pin-index-item">
        <Link to={`/${user}/board/${board.id}`} style={{cursor:'zoom-in'}} >
          <h3 className="board-name">{board.name}</h3>
          <img src={randomPin.image_url}/>
        </Link>
        <button onClick={() => deleteBoard(board.id)} id="board-delete">Delete</button>
      </div>
    </li>
  )
};

export default withRouter(BoardIndexItem);
