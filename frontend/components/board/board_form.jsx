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
                private: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  onSelect(option){
    debugger
    this.setState({category: option.label});
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[secret]: !e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger

    this.props.createBoard(this.state).then(() => {
      this.setState(name: "", description: "", category: "", secret: false );
    });
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
        'Tattoos', 'Holiday and events'
      ]
    return (
      <div className="pin-form">
        <h3>Create a Board</h3>
        <form onSubmit={this.handleSubmit}>

          <label>Create board name:</label>
          <input type="text"
            onChange={this.update('name')}
            placeholder="Add a board name" />
          <br />

          <label>Board description:</label>
          <textarea
            onChange={this.update('description')}
            placeholder="What is the board about?" />
          <br />

          <label>Make it private:</label>
          <Toggle
            onSelect={this.handleChange}
            value={this.state.secret} />

          <label>Category:</label>
            <Dropdown options={options}
              onChange={this.onSelect}
              placeholder="Select a category" />

          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default BoardForm;
