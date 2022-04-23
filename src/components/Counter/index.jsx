import React, { Component } from 'react'

export default class Counter extends Component {
  state = { count: 0 }

  increment = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    console.log("count" + count)
    console.log("value:" + value)
    this.setState({ count: count + value*1 })
  }
  decrement = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({ count: count - value*1 })
  }
  incrementIfOdd = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    if (count % 2 != 0) {
      this.setState({ count: count + value*1 })
    }
  }
  syncIncrement = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    setTimeout(() => {
      this.setState({ count: count + value*1 })
    }, 200);
  }
  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>increase</button>
        <button onClick={this.decrement}>decrease</button>
        <button onClick={this.incrementIfOdd}>incrementIfodd</button>
        <button onClick={this.syncIncrement}>sync increment</button>
      </div>
    )
  }
}
