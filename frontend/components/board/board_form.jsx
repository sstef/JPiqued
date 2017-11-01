import { connect } from 'react-redux';
import React from 'react';
import map from 'lodash/map';
import Dropdown from 'react-dropdown';
import Toggle from 'react-toggle'

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                name: "",
                description: "",
                category: "",
                private: false }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
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
      private: this.state.private,
    }

    this.props.updateBoard(board).then(() => {
      this.setState(name: "", description: "", category: "", secret: false );
    });
  }

  render () {
    if (!this.props.board){
      return ( <div></div> )
    }
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
      <div className="board-form">
        <h3>Create a Board</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Create board name:
          <input type="text"
            onChange={this.update('name')}
            placeholder="Add a board name" />
          </label>
          <br />

          <label>Board description:
          <textarea
            onChange={this.update('email')}
            placeholder="What is the board about?" />
          </label>
          <br />

          <label> category:
            <Dropdown options={options}
              onChange={this.update('category')}
              placeholder="Select a category" />
          </label>
          <br/>

          <label>Make it private:
            <Toggle
              defaultChecked={this.state.secret}
              onChange={this.handleChange} />
          </label>

          <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default BoardForm;
