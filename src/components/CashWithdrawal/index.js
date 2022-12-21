// Write your code here

import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  changeAmount = value => {
    const {amount} = this.state
    if (amount === 0 || amount < 0) {
      this.setState({
        amount: 0,
      })
    } else if (amount > 0) {
      this.setState(prevState => ({amount: prevState.amount - value}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile">
              <h1 className="s-letter">S</h1>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="bal-text">Your Balance</p>
            <div className="in-rupee-container">
              <ul className="amount-list-container">
                <p className="result-amount">{amount}</p>
                <li className="in-rupees">In Rupees</li>
              </ul>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="ul-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                eachItem={each}
                key={each.id}
                changeAmount={this.changeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
