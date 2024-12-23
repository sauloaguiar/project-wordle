import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Attempts from '../Attempts/Attempts';
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [attempts, setAttempts] = React.useState([]);

  function handleSubmitGuess(value){
    const result = checkGuess(value, answer);
    setAttempts([...attempts, result])
    setGuess('')
  }

  const won = attempts && attempts.length > 0 && attempts.length < 6 && attempts.some(attempt => attempt.every(entry => entry.status === 'correct'));
  const lost = !won && attempts && attempts.length === 6;
  
  return <>
    <Attempts attempts={attempts}/>
    {won && (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    )}
    {lost && (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>)
    }
    {!won && !lost && <Input currentGuess={guess} setGuess={setGuess} submitGuess={handleSubmitGuess}/>}
  </>;
}

export default Game;
