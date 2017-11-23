import React from 'react';
import map from 'lodash/map';
import Dropdown from 'react-dropdown';
import Toggle from 'react-toggle'

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = this.props.board || {
                name: "",
                description: "",
                category: "",
                private: false };
    this.action = this.props.action;
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
    this.setState({category: option.label});
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({[secret]: !e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    this.action(this.state).then(() => {
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

    let index = options.findIndex(this.state.category) || options[0];

    return (
      <div className="pin-form">
        <h3>{formType} a Board</h3>
        <form onSubmit={this.handleSubmit}>

          <label>{formType} board name:</label>
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
            value={this.state.secret} />

          <label>Category:</label>
            <Dropdown options={options}
              value={index}
              onChange={this.onSelect}
              placeholder="Select a category" />

          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default BoardForm;
