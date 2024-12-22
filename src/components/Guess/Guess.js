import React from 'react';

function Guess({currentGuess, setGuess, submitGuess}) {

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleSubmitGuess(event) {
    event.preventDefault();
    submitGuess((currentGuess.toUpperCase()));
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        value={currentGuess}
        onChange={handleInputChange}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        minLength={5}
        maxLength={5}
        />
    </form>
  );
}

export default Guess;
