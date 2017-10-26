import React from 'react';
import PinIndexItem from './pin_index_item';
import PinFormContainer from './pin_form_container';

class PinIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPins();
  }

  render () {
    return (
      <div>
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
        <PinFormContainer/>
      </div>
    );
  }
}

export default PinIndex;
