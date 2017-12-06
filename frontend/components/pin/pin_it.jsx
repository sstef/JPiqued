import React from 'react';
import map from 'lodash/map';
// import { WithContext as ReactTags } from 'react-tag-input';

class PinIt extends React.Component {
  constructor(props) {
    super(props);
    const pin = this.props.pin;
    this.state = {
            title: pin.title,
            link_url: pin.link_url,
            description: pin.description,
            board_id: this.props.boards[0].id,
            keywords: [],
            image: pin.image_url.slice(2).split('?')[0]
        }
    this.keywords = {tags: this.props.pin.keywords};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSelected = this.onSelected.bind(this);
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

  onSelected(e){
    this.setState({board_id: parseInt(e.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("pin[title]", this.state.title);
    formData.append("pin[link_url]", this.state.link_url);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[board_id]", this.state.board_id);
    formData.append("pin[image]", this.state.image);

    this.props.createPin(formData).then(() => this.props.closePin());
  }

  render () {
    const pin = this.props.pin;
    const boards = this.props.boards;
    const tags = this.keywords.tags;
    return (
      <div className="edit-form">
        <h3>Pin It</h3>
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


          <label>Edit the description:</label>
          <textarea
            type="text"
            onChange={this.update('description')}
            value={this.state.description}
            placeholder="Describe this image" />
          <br/>

          <label>Pick a board:</label>
          <br/>
          <select onChange={this.onSelected} value={this.state.board_id}>
            {
              boards.map(board => {
                return (
                  <option key={board.id} value={`${board.id}`}>{board.name}</option>
                );
              })
            }
          </select>
          <br></br>
          <br></br>
          <input type="submit" value="Pin it!" />

        </form>
      </div>
    );
  }
}

export default PinIt;
