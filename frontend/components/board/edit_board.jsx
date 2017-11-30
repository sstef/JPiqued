import React from 'react';
import map from 'lodash/map';
import Toggle from 'react-toggle';
import {withRouter} from "react-router-dom";

class EditBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    this.deleteBoard = this.props.deleteBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onSelected = this.onSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({secret: !e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let board = this.state;
    this.props.updateBoard(board).then(() => this.props.closeModal())
  }

  handleDelete(e) {
    e.preventDefault();
    this.deleteBoard(this.state.id).then(() => {
      this.props.history.goBack();
    })
  }

  onSelected(e){
    this.setState({category: e.target.value});
  }

  render () {
    // if (!this.props.board){
    //   return ( <div></div> )
    // }
    const options = [
        'Home', 'Electronics', 'Fashion',
        'Crafts', 'Animals', 'Architecture',
        'Art', 'Car', 'Cars and motorcycles',
        'Design', 'Food and drink',
        'Travel', 'Science and nature', 'Technology',
        'Hobbies', 'Health and fitness', 'Hair and beauty',
        'Motivational', 'Entertainment', 'Sports',
        'Kids and parenting', 'Humor', 'Holidays',
        'Tattoos', 'Holiday and events', 'Other'
      ]

    let index = options.indexOf(this.state.category) || 0;

    return (
      <div className="pin-form">
        <h3>Update Board</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Update board name:</label>
          <input type="text"
            value={this.state.name}
            onChange={this.update('name')}
            placeholder="Add a board name" />
          <br />

          <label>Board description:</label>
          <textarea
            value={this.state.description}
            onChange={this.update('description')}
            placeholder="What is the board about?" />
          <br />

          <label>Make it private:</label>
          <Toggle
            onSelect={this.handleChange}
            defaultChecked={this.state.secret} />

          <label>Category:</label>
            <select onChange={this.onSelected} value={options[index]} className="board-dropdown">
              {
                options.map(option => {
                  return (
                    <option key={options.indexOf(option)} value={option}>{option}</option>
                  );
                })
              }
            </select>

          <input type="submit" value="Update" />

        </form>
        <form onSubmit={this.handleDelete}>
          <input type="submit" value="Delete Board" />
        </form>
      </div>
    );
  }
}

export default withRouter(EditBoard);
