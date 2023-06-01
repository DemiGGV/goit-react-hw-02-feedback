import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { MainContainer } from './MainContainer';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementField = type => {
    console.log(this);
    console.log(type);
    this.setState(
      pState => {
        return {
          [type]: pState[type] + 1,
        };
      },
      () => {
        const total = this.countTotalFeedback(this.state);
        const positivePercentage = this.countPositiveFeedbackPercentage(
          total,
          this.state.good
        );

        this.setState({
          total,
          positivePercentage,
        });
        console.log(this.state);
      }
    );
  };

  countTotalFeedback = state => {
    return state.good + state.neutral + state.bad;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    console.log(total, good);
    return (good / total).toFixed(2) * 100;
  };

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions
            incrementField={this.incrementField}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.state.total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </MainContainer>
    );
  }
}
