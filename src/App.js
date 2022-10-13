import React, { Fragment } from "react";
import Welcome from "./components/welcome/Welcome";
import UserForm from "./components/userform/userForm";
import Deposit from "./components/depositForm/DespositForm";

class App extends React.Component {
  showInConsole = (show) => {
    console.log(show)
  }
  render() {
    return(
    <Fragment>
      <UserForm showInConsole={this.showInConsole}/>
      <Deposit/>
      <Welcome/>
    </Fragment>
    )
  }
}

export default App;
