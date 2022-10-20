import React from "react";

export default class Withdraw extends React.Component {
  expenseName = "";
  amountWithdrawn = 0;

  itemList = localStorage.getItem("listOfWithdraws")
    ? JSON.parse(localStorage.getItem("listOfWithdraws"))
    : [];

  getWithdrawInfo = (e) => {
    this.amountWithdrawn = parseInt(e.target.value);
  };

  submitWithdrawInfo = (e) => {
    e.preventDefault();

    if (this.amountWithdrawn > localStorage.getItem("balance", this.balance)) {
      alert("Insufficient balance.");
      return;
    }

    let checkItems = false;

    for (let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i].productName === this.expenseName) {
        checkItems = true;
      }
    }
    if (checkItems) {
      alert("Oh no no! You already bought that!");
    } else {
      const withdrawList = {
        productName: this.expenseName,
        amount: this.amountWithdrawn,
      };
      this.itemList.push(withdrawList);
      localStorage.setItem("listOfWithdraws", JSON.stringify(this.itemList));
      localStorage.getItem("listOfWithdraws");
      this.props.saveWithdrawn(this.expenseName, this.amountWithdrawn);
    }
  };

  render() {
    return (
      <div className="withdraw-container">
        <form onSubmit={this.submitWithdrawInfo}>
          <input
            className="withdraw-content"
            type="text"
            onChange={(e) => (this.expenseName = e.target.value)}
            placeholder="Expense Name"
          />
          <input
            className="withdraw-content"
            type="number"
            onChange={this.getWithdrawInfo}
            placeholder="Amount to withdraw"
          />
          <input className="content-button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
