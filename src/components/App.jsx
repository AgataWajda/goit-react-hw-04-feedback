import { Component } from 'react';
import { Statistic } from './Statistic/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notfication } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    const { name } = event.target;

    this.setState({ [name]: this.state[name] + 1 });
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
          <Feedback
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback}
          ></Feedback>
          {total > 0 ? (
            <Statistic
              bad={this.state.bad}
              good={this.state.good}
              neutral={this.state.neutral}
              total={total}
              percentage={percentage}
            ></Statistic>
          ) : (
            <Notfication message="No feedback given"></Notfication>
          )}
        </Section>
      </div>
    );
  }
}
