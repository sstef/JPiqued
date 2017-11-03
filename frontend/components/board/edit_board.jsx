import { connect } from 'react-redux';
import React from 'react';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import map from 'lodash/map';
import Dropdown from 'react-dropdown';
import Toggle from 'react-toggle';

class BoardEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  _onSelect(name){
    this.setState({category: name.label});
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[secret]: !e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      secret: this.state.secret,
    }

    this.props.updateBoard(board).then(() => {
      this.setState(name: "", description: "", category: "", secret: false );
    });
  }

  render () {
    if (!this.props.board){
      return ( <div></div> )
    }
    const user = this.props.user
    const options = [
        'Home', 'Electronics', 'Fashion',
        'Crafts', 'Animals', 'Architecture',
        'Art', 'Car', 'Cars and motorcycles',
        'Design', 'Entertainment', 'Food and drink',
        'Travel', 'Science and nature', 'Technology',
        'Hobbies', 'Health and fitness', 'Hair and beauty',
        'Motivational', 'Entertainment', 'Sports',
        'Kids and parenting', 'Humor', 'Holidays',
        'Tattoos', 'Sports', 'Holiday and events'
      ]
    return (
      <div className="edit-form">
        <h3>Edit your Board</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Edit board name:
          <input type="text"
            onChange={this.update('name')}
            placeholder="Add a board name"
            value={this.state.name} />
          </label>
          <br />

          <label>Edit description:
          <textarea
            onChange={this.update('email')}
            placeholder="What is the board about?"
            value={this.state.description} />
          </label>
          <br />

          <label>Update category:
            <Dropdown options={names}
              onSelect={this._onSelect}
              placeholder="Select a board" />
          </label>
          <br/>

          <label>Make it private:
            <Toggle
              defaultChecked={this.state.secret}
              onChange={this.handleChange} />
          </label>

          <input type="submit" value="Update" />
          <button onClick={() => deleteBoard(this.props.board.id)}>Delete</button>
        </form>
      </div>
    );
  }
}

export default BoardEditForm;
