import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  calculate = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="image"
          alt="letters calculator"
        />
        <div className="details-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="search" className="phrase">
              Enter the Phrase
            </label>
            <br />
            <input
              id="search"
              type="text"
              placeholder="Enter the Phrase"
              className="input-element"
              onChange={this.calculate}
              value={inputPhrase}
            />
            <div className="letters">
              <p>No.of Letters: {inputPhrase.length}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
