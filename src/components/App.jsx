import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from './Section';
import Notification from './Notification';
import PropTypes from 'prop-types';

class App extends Component {
  static defaultProps = { initialGood: 0, initialNeutral: 0, initialBad: 0 };
  static propTypes = {
    initialGood: PropTypes.number,
    initialNeutral: PropTypes.number,
    initialBad: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  increaseIncrementGood = () => {
    this.setState(currentState => ({
      good: currentState.good + 1,
    }));
  };
  increaseIncrementNeutral = () => {
    this.setState(currentState => ({
      neutral: currentState.neutral + 1,
    }));
  };
  increaseIncrementBad = () => {
    this.setState(currentState => ({
      bad: currentState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          paddingLeft: 20,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onIncrementGood={this.increaseIncrementGood}
            onIncrementNeutral={this.increaseIncrementNeutral}
            onIncrementBad={this.increaseIncrementBad}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              onStateGood={this.state.good}
              onStateNeutral={this.state.neutral}
              onStateBad={this.state.bad}
              onTotal={this.countTotalFeedback()}
              onPersentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
