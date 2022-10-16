import React from "react";

export default class Deposit extends React.Component {
  depositAmount = 0;

  render() {
    return (
      <div className="container">
        <form
          className="form-content"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.depositAmount);
          }}
        >
          <input
            className="content"
            type="number"
            placeholder="Amount to deposit"
            onChange={(e) => (this.depositAmount = e.target.value)}
          />
          <input className="content-button" type="submit" />
        </form>
      </div>
    );
  }
}
