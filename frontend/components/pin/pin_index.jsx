import React from 'react';
import PinIndexItem from './pin_index_item';
// import PinFormContainer from './pin_form_container';
import GreetingContainer from '../greeting_container';

class PinIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPins();
  }

  render () {
    let body = document.getElementById('root');
    body.style.backgroundColor = "#EDEDED"
    return (
      <div>
        <div className="NavBar">
          <GreetingContainer />
        </div>

        <div className="pin-index-view">
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
      </div>
    );
  }
}

export default PinIndex;
