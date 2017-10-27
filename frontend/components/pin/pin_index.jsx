import React from 'react';
import PinIndexItem from './pin_index_item';
import NavBar from '../navbar_container';
import PinFormContainer from './pin_form_container'
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

  componentWillUpdate(newProps){
    this.props.pins !== newProps.pins;
  }

  render () {
    const popoverTop = (
       <Popover id="popover-pin-form">
         <PinFormContainer />
       </Popover>
    );

    return (
      <div>
        <header>
          <NavBar props={this.props} />
        </header>
        <div className="index-pins">
          <ul className="pin-index-list">
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
