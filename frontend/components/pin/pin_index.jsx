import React from 'react';
import PinIndexItem from './pin_index_item';
// import PinFormContainer from './pin_form_container';
import NavBar from '../navbar_container'


class PinIndex extends React.Component {

  componentDidMount() {
    let body = document.getElementById('root');
    body.style.backgroundColor = "#EFEEEE"
    this.props.fetchPins();
  }

  render () {
    let body = document.getElementById('root');
    body.style.backgroundColor = "#EDEDED"
    return (
      <div>
        <header>
          <NavBar />
        </header>

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
    );
  }
}

export default PinIndex;
