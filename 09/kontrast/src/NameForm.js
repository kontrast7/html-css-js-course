import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      email: "",
      pass: "",
      region: "",
      nickname: "",
      shouldShowElem: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitNote = this.submitNote.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  submitNote() {
    this.setState({
      shouldShowElem: true,
    });
  }

  render() {
    return (
      <div>
        <h3>Form</h3>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="pass"
            placeholder="password"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label>Region: </label>
          <input
            type="text"
            name="region"
            placeholder="region"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label>Nickname: </label>
          <input
            type="text"
            name="nickname"
            placeholder="nickname"
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <label>Gender: </label>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.onChangeHandler}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.onChangeHandler}
          />
          <br />
          <br />
          <button onClick={this.submitNote}>Send</button>
        </form>
        <div>
          <br />
          <br />
          <div className="data">
            {this.state.shouldShowElem && (
              <div className="elem">
                <label>FORM</label>
                <br />
                Name: {this.state.name}
                <br />
                Email: {this.state.email}
                <br />
                gender: {this.state.gender}
                <br />
                password: {this.state.pass}
                <br />
                region: {this.state.region}
                <br />
                nickname: {this.state.nickname}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default NameForm;
