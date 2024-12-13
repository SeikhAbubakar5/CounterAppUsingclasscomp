import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  render() {
    return (

      <div className='App'>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
        </div>
      </div>
    )
  }
}
export default App


