import React from 'react';
import { popover, OverlayTrigger, Button } from 'react-bootstrap';

class PinForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {description: "", title: "", link_url: ""};
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createPin(this.state)
      .then(() => this.setState({description: "", title: "", link_url: ""}))
      // .then(() => document.getElementsByClassName('popover-pin-form').Popover('hide'))
  }

  render () {
    return (
      <div className="pin-form">
        <h3>ADD A PIN</h3>
        <form onSubmit={this.handleSubmit}>
          <div id="image-preview">
            placeholder for image preview
          </div>

          <label>Add a link:</label>
          <br />

          <input
            type="text"
            onChange={this.update('link_url')}
            value={this.state.link_url}
            placeholder="Add a url here"/>
          <br />

          <label>Upload your image:</label>
          <br />
            <input type="text"
              onChange={this.update('title')}
              value={this.state.title}
              placeholder="Link your image" />
            <br/>

            <label>Add a description:</label>
            <br />
            <textarea
              type="text"
              onChange={this.update('description')}
              value={this.state.description}
              placeholder="Describe this image" />
            <br/>
            <input type="submit" value="Pin it!" />
        </form>
      </div>
    );
  }
}

export default PinForm;
