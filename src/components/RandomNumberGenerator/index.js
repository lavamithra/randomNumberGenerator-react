// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const rdNum = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: rdNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            onClick={this.generateRandomNumber}
            className="btn-gen"
          >
            Generate
          </button>

          <p className="num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
