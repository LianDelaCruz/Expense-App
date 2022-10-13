import React, { Fragment } from "react";
import Deposit from "./components/depositForm/DespositForm";
import Withdraw from "./components/withdrawFrom/WithdrawForm";

class App extends React.Component {

  saveDeposit(amount){
    console.log(amount)
  }

  saveWithdrawn(amount) {
    console.log(amount)
  }
  render() {
    return(
    <Fragment>
      <Deposit onSubmit={this.saveDeposit}/>
      <Withdraw onSubmit={this.saveWithdrawn}/>
    </Fragment>
    )
  }
}

export default App;
