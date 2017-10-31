import { connect } from 'react-redux';
import React from 'react';
import { updateUser } from '../../actions/user_actions';
import map from 'lodash/map';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
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

    formData.append("user[name]", this.state.name);
    formData.append("user[email]", this.state.email);
    formData.append("user[password]", this.state.password);

    if (file) {
      formData.append("user[image]", file);
    }

    this.props.updateUser(this.state).then(() => {
      this.setState(name: "", email: "", password: "", imageUrl: "", imageFile: null)
    });
  }

  render () {
    const user = this.props.user

    return (
      <div className="edit-form">
        <h3>Edit your profile</h3>
        <form onSubmit={this.handleSubmit}>

          <div id="image-preview">
            Update your profile picture:
            <br />
            <img src={this.state.imageUrl} width='150px' />
            <input type="file" onChange={this.uploadFile} />
          </div>

          <label>Edit your name:</label>
          <input type="text"
            onChange={this.update('name')}
            value={this.state.name} />

          <br />

          <label>Change your email:</label>
          <input
            type="text"
            onChange={this.update('email')}
            value={this.state.email} />
            <br />

            <label>Change your password:</label>
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password} />
            <br/>

            <input type="submit" value="Update" />
        </form>
      </div>
    );
  }
}

export default UserEditForm;
