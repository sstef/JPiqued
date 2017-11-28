import React from 'react';
import map from 'lodash/map';
import Toggle from 'react-toggle';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board || {
                name: "",
                description: "",
                category: "",
                secret: false };
    this.action = this.props.action;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onSelected = this.onSelected.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    this.action(board).then(() => {
      this.setState({name: "", description: "", category: "", secret: false} );
    });
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
        <h3>{this.props.formType} a Board</h3>
        <form onSubmit={this.handleSubmit}>

          <label>{this.props.formType} board name:</label>
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
          <br/>
          <label>Category:</label>
            <select onChange={this.onSelected} value={options[index]} class="board-dropdown">
              {
                options.map(option => {
                  return (
                    <option key={options.indexOf(option)} value={option}>{option}</option>
                  );
                })
              }
            </select>

          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default BoardForm;
