import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <div className={css.feedbackOptions}>
    <button className={css.btn} type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button className={css.btn} type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button className={css.btn} type="button" onClick={onIncrementBad}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
