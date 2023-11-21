import { Component } from 'react';

export const App = () => {
  return (
    <div>
      <h1>Please leave your feedback</h1>

      <MyClassComponent></MyClassComponent>
    </div>
  );
};

class MyClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0,
    };
  }

  goodCounter = () => {
    this.setState({ good: this.state.good + 1 });
  };

  neutralCounter = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  badCounter = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.goodCounter}>Good</button>
        <button onClick={this.neutralCounter}>Neutral</button>
        <button onClick={this.badCounter}>Bad</button>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>

        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}
