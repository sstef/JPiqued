import React from 'react';
import PinIndexItem from './pin_index_item';
// import PinFormContainer from './pin_form_container';
import NavBar from '../navbar_container';
import PinForm from './pin_form'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';


class PinIndex extends React.Component {

  componentWillMount() {
    let body = document.getElementById('root');
    body.style.backgroundImage = null
    body.style.backgroundColor = "#EDEDED"
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  render () {
    const popoverTop = (
       <Popover id="popover-pin-form">
         <PinForm />
       </Popover>
    );

    return (
      <div>
        <header>
          <NavBar props={this.props} />
        </header>
        <div className="index-pins">
          <ul>
            {
              this.props.pins.map(pin => (
                <PinIndexItem
                  key={pin.id}
                  deletePin={this.props.deletePin}
                  pin={pin} />
              ))
            }
          </ul>
        </div>

        <div className="add-button-wrapper">

          <div className="popover-form-button">
            <OverlayTrigger trigger="click"
              rootClose
              placement="top"
              container={this}
              overlay={popoverTop}
              arrowOffsetTop={90}
              arrowOffsetLeft={90}
              >
              <Button> + </Button>
            </OverlayTrigger>

          </div>
        </div>

      </div>
    );
  }
}

export default PinIndex;
