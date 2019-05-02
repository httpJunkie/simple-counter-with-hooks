import React from 'react';

class Counter extends React.Component {
  state = { count: 0 };
  incrementCount = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>Click Me</button>
      </div>
    );
  }
}

export default Counter;
