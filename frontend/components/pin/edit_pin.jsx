import { connect } from 'react-redux';
import React from 'react';
import map from 'lodash/map';
import { WithContext as ReactTags } from 'react-tag-input';


class PinEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin
    this.keywords = {tags: this.props.pin.keywords};
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePin(this.state).then(() => {
      this.props.closeModal();
    });
  }

  render () {
    const pin = this.props.pin;
    const tags = this.keywords.tags;

    return (
      <div className="edit-form">
        <h3>Edit this pin</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Edit the title:</label>
          <input type="text"
            onChange={this.update('title')}
            value={this.state.title}
            placeholder="Give your pin a title" />

          <br />
          <label>Change the link address:</label>
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

          <label>Edit the description:</label>
          <textarea
            type="text"
            onChange={this.update('description')}
            value={this.state.description}
            placeholder="Describe this image" />
          <br/>

          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default PinEditForm;
