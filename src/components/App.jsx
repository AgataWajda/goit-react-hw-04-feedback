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

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = total => {
    return (this.state.good / total) * 100;
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <div>
        <button onClick={this.goodCounter}>Good</button>
        <button onClick={this.neutralCounter}>Neutral</button>
        <button onClick={this.badCounter}>Bad</button>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {Math.round(percentage)} %</p>
      </div>
    );
  }
}
