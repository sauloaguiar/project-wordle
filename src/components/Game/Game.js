import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess/Guess';
import Attempts from '../Attempts/Attempts';
import crypto from 'crypto';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [attempts, setAttempts] = React.useState([]);

  function handleSubmitGuess(value){
    console.log('guess', value)
    setAttempts([...attempts, {id: crypto.randomUUID(), value}])
    setGuess('')
  }
  return <>
    <Attempts attempts={attempts}/>
    <Guess currentGuess={guess} setGuess={setGuess} submitGuess={handleSubmitGuess}/>
  </>;
}

export default Game;
