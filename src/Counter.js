import React from 'react';

class Counter extends React.Component {
  state = { count: 0 };
  incrementCount = () => this.setState({ count: this.state.count + 1 });
  
  componentDidMount() { document.title = `You clicked ${this.state.count} times`; }
  componentDidUpdate() { document.title = `You clicked ${this.state.count} times`; }

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
