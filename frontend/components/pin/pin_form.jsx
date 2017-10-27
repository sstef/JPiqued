import React from 'react';

class PinForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {description: "", image_url: "", link_url: ""};
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/'));
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
            value={this.state.link_url}
            onChange={this.update('link_url')}
            placeholder="Add a url here"/>
          <br />

          <label>Upload your image:</label>
          <br />
            <input type="text"
              value={this.state.image_url}
              onChange={this.update('image_url')}
              placeholder="Link your image" />
            <br/>

            <label>Add a description:</label>
            <br />
            <textarea
              type="text"
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Describe this image" />
            <p />
            <input type="submit" value="Pin it!" />
        </form>
      </div>
    );
  }
}

export default PinForm;
