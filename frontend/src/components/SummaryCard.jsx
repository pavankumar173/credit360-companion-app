import React from 'react';

const SummaryCard = ({ score = 725 }) => (
  <div className="summary-card">
    <h2>Credit Score Summary</h2>
    <p>Your score is:</p>
    <div className="score">{score}</div>
    <p>Status: {score > 700 ? 'Good' : 'Needs Improvement'}</p>
  </div>
);

export default SummaryCard;
