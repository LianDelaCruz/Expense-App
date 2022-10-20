import React, { Fragment } from "react";
import Deposit from "./components/depositForm/DespositForm";
import Withdraw from "./components/withdrawFrom/WithdrawForm";

class App extends React.Component {
  balance = 0;

  getItemList = localStorage.getItem("listOfWithdraws") ? JSON.parse(localStorage.getItem("listOfWithdraws")) : [];

  saveDeposit = (amount) => {
    console.log(amount);
    if (localStorage.getItem("budget")) {
      localStorage.setItem(
        "budget",
        parseInt(localStorage.getItem("budget")) + amount
      );
    } else {
      localStorage.setItem("budget", amount);
    }
    this.updateBalance(amount);
  };
  updateBalance = (amount) => {
    this.balance = this.balance + amount;
    if (localStorage.getItem("balance")) {
      localStorage.setItem(
        "balance",
        parseInt(localStorage.getItem("balance")) + amount
      );
    } else {
      localStorage.setItem("balance", this.balance);
    }
    window.location.reload();
  };
  saveWithdrawn = (item, amount) => {

    if(amount > localStorage.getItem("balance", this.balance)) {
      alert('Insufficient balance.');
      return;
    } else if (localStorage.getItem("withdraw")) {
        localStorage.setItem(
          "withdraw",
          parseInt(localStorage.getItem("withdraw")) + amount);
    } else {
      localStorage.setItem("withdraw", amount);
    }
    this.updateBalance(-amount);
  };

  render() {
    const budget = localStorage.getItem("budget")
      ? localStorage.getItem("budget")
      : 0;
    const balance = localStorage.getItem("balance")
      ? localStorage.getItem("balance")
      : 0;
    const withdraw = localStorage.getItem("withdraw")
      ? localStorage.getItem("withdraw")
      : 0;
    return (
      <Fragment>
        <h1>Budget: {budget}</h1>
        <h1>Balance: {balance}</h1>
        <h1>Withdrawn: {withdraw}</h1>
        <Deposit saveDeposit={this.saveDeposit}></Deposit>
        <Withdraw saveWithdrawn={this.saveWithdrawn} />
        <ul>{this.getItemList.map((value,index)=>{
          return(
            <li key={index}>
              {value.productName}
              {value.amount}
            </li>
          )
        })}</ul>
      </Fragment>
    );
  }
}

export default App;
