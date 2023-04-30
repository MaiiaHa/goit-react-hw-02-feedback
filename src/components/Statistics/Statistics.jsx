import React from 'react';

const Statistics = ({
  onStateGood,
  onStateNeutral,
  onStateBad,
  onTotal,
  onPersentage,
}) => (
  <div className="statistics">
    <p>
      Good: <span>{onStateGood}</span>
    </p>
    <p>
      Neutral: <span>{onStateNeutral}</span>
    </p>
    <p>
      Bad: <span>{onStateBad}</span>
    </p>
    <p>
      Total: <span>{onTotal}</span>
    </p>
    <p>
      Positive feedback: <span>{onPersentage} %</span>
    </p>
  </div>
);

export default Statistics;
