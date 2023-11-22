import { Component } from 'react';
import { Statistic } from './Statistics';
import { Freedback } from './Feedback';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };

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
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total);
    return (
      <div>
        <Section title="Please leave your feedback">
          <Freedback
            goodCounter={this.goodCounter}
            badCounter={this.badCounter}
            neutralCounter={this.neutralCounter}
          ></Freedback>
          <Statistic
            bad={this.state.bad}
            good={this.state.good}
            neutral={this.state.neutral}
            total={total}
            percentage={percentage}
          ></Statistic>
        </Section>
      </div>
    );
  }
}
