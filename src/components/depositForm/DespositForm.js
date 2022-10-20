import React from "react";

export default class Deposit extends React.Component {
  depositAmount = 0;
  

  getDepositAmount =(e) => {
    this.depositAmount = parseInt(e.target.value);
  }

  submitAmount = (e) => {
    e.preventDefault();
    this.props.saveDeposit(this.depositAmount);
  }
  
  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.submitAmount}
        >
          <input
            className="content"
            type="number"
            placeholder="Amount to deposit"
            onChange={this.getDepositAmount}
          />
          <input className="content-button" type="submit" />
        </form>
      </div>
    );
  }
}
