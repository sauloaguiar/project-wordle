import React from 'react';
import { range } from '../../utils';


function Guess({attempt}) {
  return (
    <p className='guess'>
      {range(5).map(num => {
        const className = attempt ? `cell ${attempt[num].status}` : `cell`;
        return (<span key={num} className={className}>{attempt ? attempt[num].letter : undefined}</span>)
      })}
    </p>
  );
}

export default Guess;
