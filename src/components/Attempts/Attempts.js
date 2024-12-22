import React from 'react';

function Attempts({ attempts }) {
  if (!attempts || !attempts.length) {
    return null;
  }
  return (
    <div className="guess-results">
      {attempts.map(attempt => (<p key={attempt.id} className="guess">{attempt.value}</p>))}
    </div>
  );
}

export default Attempts;
