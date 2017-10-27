import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
  componentDidMount() {
    this.props.fetchPin(this.props.pinId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchPin(nextProps.match.params.pinId);
  }

  render () {
    const pin = this.props.pin;
    if (!pin) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2 className={post.name.length > 0 ? "title-header" : "hidden"}>
          {pin.title}
        </h2>

        <div className="image-show">
          placeholder for pin image
        </div>

        <div className="index-link">
          <Link to="/">Back to Index</Link>
        </div>

        <div className="pin-show-link-button">
          <a href={pin.link_url} target="_blank">Visit</a>
        </div>

        <p>{pin.description}</p>

        <div className="pin-show-user-info">
          {pin.user.name}
        </div>

      </div>
    );
  }
}

export default PinShow;
