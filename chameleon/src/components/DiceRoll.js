// class component (stateful)
import React, { Component } from 'react'
import Die from './Dice'

class DiceRoll extends Component {
  constructor(props) {
    super(props)
    this.state = { dice: [0,0,0] }
  }

  roll = () => {
    // change the state object - dice property
    // re-render the component
    const newDice = this.state.dice.map(die => Math.floor(Math.random() * 6) + 1)
    this.setState({dice: newDice})
  }

  render() {
    // show button
    // render Die Component
    return (
      <div>
        <button onClick={this.roll}>roll!</button>
        {this.state.dice.map(die => <Die dieValue={die}/>)}
      </div>
    )
  }
}

export default DiceRoll