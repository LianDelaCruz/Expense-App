import React from "react";

export default class Deposit extends React.Component {
  depositAmount = 0;

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(this.depositAmount)
          }}>
          <input
            type="number"
            placeholder="Amount to deposit"
            onChange={(e) => (this.depositAmount = e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
