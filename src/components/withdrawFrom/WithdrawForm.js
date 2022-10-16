import React from "react";

export default class Withdraw extends React.Component {
  expenseName = "";
  amountWithdrawn = 0;
  listOfItems = [];

  render() {
    return (
      <div className="withdraw-container">
        <form
          className="withdraw-form-content"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.expenseName, this.amountWithdrawn);
          }}
        >
          <input
            className="withdraw-content"
            type="text"
            onChange={(e) => (this.expenseName = e.target.value)}
            placeholder="Expense Name"
          />
          <input
            className="withdraw-content"
            type="number"
            onChange={(e) => (this.amountWithdrawn = e.target.value)}
            placeholder="Amount to withdraw"
          />
          <input className="content-button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
