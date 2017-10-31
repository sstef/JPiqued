import React from 'react';
import { popover, OverlayTrigger, Button } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';

class PinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: "", title: "", link_url: "", keywords: []};
    this.keywords = {tags: this.state.keywords};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
   }

   handleDelete(i) {
       let tags = this.kewords.tags;
       tags.splice(i, 1);
       this.setState({tags: tags});
   }

   handleAddition(tag) {
       let tags = this.keywords.tags;
       tags.push({
           id: tags.length + 1,
           text: tag
       });
       this.setState({tags: tags});
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
    formData.append("pin[keywords]", this.keywords);

    if (file) {
      formData.append("pin[image]", file);
    }

    this.props.createPin(formData).then(() => {
      this.setState({description: "",
        title: "",
        link_url: "",
        keywords: [],
        imageUrl: "",
        imageFile: null
      },
        this.closeModal()
      );
    });
  }

  render () {
    const tags = this.keywords.tags;

    return (
      <div className="pin-form">
        <h3>ADD A PIN</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Add an image:</label>
          <div id="image-preview">
            <br />
            <img src={this.state.imageUrl} width='150px' />
            <input type="file" onChange={this.uploadFile} />
          </div>

          <label>Add a title:</label>
          <input type="text"
            onChange={this.update('title')}
            value={this.state.title}
            placeholder="Give your pin a title" />

          <br />
          <label>Add a link to a resource:</label>
          <input
            type="text"
            onChange={this.update('link_url')}
            value={this.state.link_url}
            placeholder="Add a url here" />
          <br />

            <label>Add keywords:</label>
            <div>
              <ReactTags tags={tags}
                  handleDelete={this.handleDelete}
                  placeholder={'Add keywords:'}
                  handleAddition={this.handleAddition} />
            </div>

            <label>Add a description of this pin:</label>
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
