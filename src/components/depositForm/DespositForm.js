import React from "react";

export default class Deposit extends React.Component {
    depositInput = '';

    submitDeposit = (e) => {
        e.preventDefault()
        console.log(this.depositInput)
 }
  render() {
    return (
    <div>
      <form onSubmit ={ (event)=>this.submitDeposit(event)}>
        <input
          type="number"
          placeholder="Amount to deposit"
          onChange={(e) => (this.depositInput = e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}
