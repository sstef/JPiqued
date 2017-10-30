import React from 'react';
import { popover, OverlayTrigger, Button } from 'react-bootstrap';

class PinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: "", title: "", link_url: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  uploadFile(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const file = this.state.imageFile;
    const formData = new FormData();

    formData.append("pin[title]", this.state.title);
    formData.append("pin[link_url]", this.state.link_url);
    formData.append("pin[description]", this.state.description);

    if (file) {
      formData.append("pin[image]", file);
    }

    this.props.createPin(formData).then(() => {
      this.setState({description: "",
        title: "",
        link_url: "",
        imageUrl: "",
        imageFile: null
      });
    });
  }

  render () {

    return (
      <div className="pin-form">
        <h3>ADD A PIN</h3>
        <form onSubmit={this.handleSubmit}>
          <div id="image-preview">
            <br />
            <img src={this.state.imageUrl} width='150px' />
            <input type="file" onChange={this.uploadFile} />
          </div>
          <input type="text"
            onChange={this.update('title')}
            value={this.state.title}
            placeholder="Give your pin a title" />

          <br />

          <input
            type="text"
            onChange={this.update('link_url')}
            value={this.state.link_url}
            placeholder="Add a url here" />
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
