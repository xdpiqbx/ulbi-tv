import { Component } from "react";

export default class ClassCounter extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  
  increment() {
    this.setState({count: this.state.count + 1})
  }
  
  decrement() {
    this.setState({count: this.state.count - 1})
  }

  render(){
    const {count} = this.state
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={this.increment}>Incr</button>
        <button onClick={this.decrement}>Decr</button>
      </div>
    )
  }
}