import React from "react";

export default class Withdraw extends React.Component {
  expenseName = "";
  amountWithdrawn = 0;
  listOfItems = [];
  
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.expenseName, this.amountWithdrawn)
          }}>
          <input
            type="text"
            onChange={(e) => (this.expenseName = e.target.value)}
            placeholder="Expense Name"
          />
          <input type="number" 
          onChange={(e) => (this.amountWithdrawn = e.target.value)}
          placeholder="Amount to withdraw" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
