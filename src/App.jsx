import { useState } from 'react'

import './App.css'
import Board from './components/Board'

function App() {
  const [solution, setSolution] = useState('REACT');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameState, setGameState] = useState('PLAYING'); // 'PLAYING', 'WON', 'LOST'

  function checkSubmission(guess) {
    let res = [];

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === solution[i]) {
        res.push({letter: guess[i], status: 'correct'});
      } else {
        res.push({letter: guess[i], status: 'wrong'});
      }
    }

    res.every(letter => letter.status === 'correct') ? setGameState('WON') : null;

    return res;
  }

  function handleSubmit() {
    if (gameState !== 'PLAYING') return;
    const currentGuess = document.querySelector('input').value.toUpperCase();
    const submissionResult = checkSubmission(currentGuess);

    if (gameState !== 'WON' && guesses.length === 5) {
      setGameState('LOST');
    }
  
    setGuesses([...guesses, submissionResult]);
  }

  return (
    <>
      <div className="header">WORDLE CLONE</div>
      <div className="state">{gameState}</div>
      <Board guesses={guesses} />
      <input type="text" pattern="[a-zA-Z]" minLength={5} maxLength={5} onChange={(e) => setCurrentGuess(e.target.value)} />
      <button disabled={currentGuess.length !== 5} onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App
