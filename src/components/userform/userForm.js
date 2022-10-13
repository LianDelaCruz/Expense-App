import React from "react";

export default class UserForm extends React.Component {
  inputFirstName = "";
  inputLastName = "";
  inputFirstPass = "";
  inputSecPass = "";
  inputFlower = "";
  inputBee = "";
  list = [];

  submitData = () => {
    if (this.inputFirstPass === this.inputSecPass) {
      this.inputFirstPass = Array.from(this.inputFirstPass).fill("*").join(""); //join is to make it together
      this.inputSecPass = Array.from(this.inputSecPass).fill("*").join("");
      const infoForm = {
        name: this.inputFirstName,
        lastname: this.inputLastName,
        password: this.inputFirstPass,
        confirmPassword: this.inputSecPass,
        gender: this.inputFlower || this.inputBee,
      };
      this.list.push(infoForm);
      this.props.showInConsole(this.list)
    } else {
      alert("you little shit. you wrote the wrong pass!");
      window.location.reload();
    }
  };

  displayUsersInfo = () => {};

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => (this.inputFirstName = e.target.value)}
            placeholder="first name"
          />
          <input
            type="text"
            onChange={(e) => (this.inputLastName = e.target.value)}
            placeholder="last name"
          />
          <input
            type="password"
            onChange={(e) => (this.inputFirstPass = e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            onChange={(e) => (this.inputSecPass = e.target.value)}
            placeholder="Confirm Password"
          />
          <label>
            <input
              type="radio"
              name="Gender"
              onClick={(e) => (this.inputFlower = e.target.value)}
              value="Flower"
            />
            Flower
          </label>
          <label>
            <input
              type="radio"
              name="Gender"
              onClick={(e) => (this.inputBee = e.target.value)}
              value="Bee"
            />
            Bee
          </label>
          <button onClick={this.submitData}>Submit</button>
        </form>{" "}
        {/*better to use onSubmit because we are using form*/}
        <div className="info-container"></div>
      </div>
    );
  }
}
