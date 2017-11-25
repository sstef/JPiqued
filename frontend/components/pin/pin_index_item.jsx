import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PinIt from './pin_it';
import Modal from 'react-modal';

const PinIndexItem = ({ key, pin, router, deletePin, history }) => {
  var modalIsOpen = false
  const openModal = () => { modalIsOpen = true };
  const closeModal = () => { modalIsOpen = false };

  const modalStyle = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor  : 'none',
      },
      content : {
        position                   : 'absolute',
        top                        : '40%',
        left                       : '8%',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '15px',
        outline                    : 'none',
        padding                    : '20px',
        width                      : '200px',
        height                     : '300px',
      }
    }

  return (
    <li key={key}>
      <div className="pin-index-item">
        <Link to={`/pins/${pin.id}`} style={{cursor:'zoom-in'}} >
          <img src={pin.image_url} />
        </Link>
        <button onClick={() => deletePin(pin.id)}>Delete</button>
          <div onClick={openModal()} className="pin-it-button">
            <Modal
                style={modalStyle}
                isOpen={modalIsOpen}
                onRequestClose={closeModal()} >

                <button onClick={closeModal()} className='clickable' style={{float: 'right'}}>X</button>
                <PinIt pin={ pin }
                  closeModal={closeModal.bind(this)}/>
              </Modal>
          </div>
      </div>
    </li>
  );
};

export default withRouter(PinIndexItem);
