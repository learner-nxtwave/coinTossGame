// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headCount: 0, tossCount: 0, toss: 'heads'}

  getTossCoin = () => {
    const numToss = Math.floor(Math.random() * 2)
    const tossResult = numToss === 0 ? 'heads' : 'tails'
    if (tossResult === 'heads') {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState(prevState => ({tossCount: prevState.tossCount + 1}))
    }
    this.setState({toss: tossResult})
  }

  render() {
    const {headCount, tossCount} = this.state
    const {toss} = this.state
    const imgUrl =
      toss === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="homePage">
        <div className="cardContainer">
          <h1 className="title">Coin Toss Game</h1>
          <p className="tagLine">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.getTossCoin}>
            Toss Coin
          </button>
          <ul className="countList">
            <p>Total: {headCount + tossCount}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tossCount}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
