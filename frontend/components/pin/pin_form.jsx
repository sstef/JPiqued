import React from 'react';
import { popover, OverlayTrigger, Button } from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';
import Dropdown from 'react-dropdown';
import find from 'lodash/find';

class PinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {description: "", title: "", link_url: "", keywords: [], board_name: null};
    this.keywords = {tags: this.state.keywords};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this._onSelect = this._onSelect.bind(this);
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

  _onSelect(option){
    this.setState({board_name: option.label});
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
    const board = find(this.props.boards, {name: "Mickey Aldrin"});
    const file = this.state.imageFile;
    const formData = new FormData();

    formData.append("pin[title]", this.state.title);
    formData.append("pin[link_url]", this.state.link_url);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[keywords]", this.keywords);
    formData.append("pin[baord_id]", board.id);

    if (file) {
      formData.append("pin[image]", file);
    }

    this.props.createPin(formData).then(() => {
      this.setState({description: "",
        title: "",
        link_url: "",
        keywords: [],
        board_name: null,
        imageUrl: "",
        imageFile: null
      });
    }).then(() => this.props.closeModal());
  }

  render () {

    const tags = this.keywords.tags;
    const boards = this.props.boards;

    const names = [];
    this.props.boards.forEach(board => names.push(board.name));
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

            <label>Add a description of this pin:</label>
            <textarea
              type="text"
              onChange={this.update('description')}
              value={this.state.description}
              placeholder="Describe this image" />
            <br/>

            <label>Pick a board:</label>
            <Dropdown options={names}
              onSelect={this._onSelect}
              placeholder="Select a board" />

            <input type="submit" value="Pin it!" />
        </form>
      </div>
    );
  }
}

export default PinForm;



// TODO: Create keyword tags table and implement the tagging of keywords
//
// <label>Add keywords:</label>
// <div>
//   <ReactTags tags={tags}
//     handleDelete={this.handleDelete}
//     placeholder={'Add keywords:'}
//     handleAddition={this.handleAddition} />
// </div>
