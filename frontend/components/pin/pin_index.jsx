import React from 'react';
import PinIndexItem from './pin_index_item';
// import PinFormContainer from './pin_form_container';
import NavBar from '../navbar_container'


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
      </div>
    );
  }
}

export default PinIndex;
