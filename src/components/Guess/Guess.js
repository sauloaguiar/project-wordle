import React from 'react';
import { range } from '../../utils';

function Guess({attempt}) {
  return (
    <p className='guess'>
      {range(5).map(num => (
        <span key={num} className="cell">{attempt ? attempt[num] : undefined}</span>
      ))}
    </p>
  );
}

export default Guess;
