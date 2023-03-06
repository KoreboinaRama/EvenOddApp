/* eslint-disable no-undef */
// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {isNum: 0}

  onIncrement = () => {
    this.setState(prevSta => ({isNum: prevSta.isNum + 1}))
  }

  render() {
    const {isNum} = this.state
    const text = isNum ? 'count is Odd' : 'count is Even'
    return (
      <div className="cont">
        <div className="card">
          <h1 className="title">Count {isNum}</h1>
          <p className="des">{text}</p>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
