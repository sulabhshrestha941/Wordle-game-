import { useState, useEffect } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { useWordle, MAX_TURNS } from './hooks/useWordle';
import { getRandomWord } from './data/words';
import './App.css';

export default function App() {
  const [answer] = useState(() => getRandomWord());

  const {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
  } = useWordle(answer);

  const isGameOver = isCorrect || turn >= MAX_TURNS;

  useEffect(() => {
    if (isGameOver) return;

    const onKeyDown = (event) => handleKeyup(event.key);

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKeyup, isGameOver]);

  const handlePlayAgain = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <h1>React Wordle</h1>
      <p className="subtitle">Guess the 5-letter word in 6 tries.</p>

      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        turn={turn}
      />

      {isGameOver && (
        <div className="message">
          {isCorrect ? (
            <p className="win">🎉 You got it! The word was "{answer}".</p>
          ) : (
            <p className="lose">😢 Out of tries! The word was "{answer}".</p>
          )}

          <button
            className="play-again"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      )}

      <Keyboard
        usedKeys={usedKeys}
        onKeyPress={handleKeyup}
      />
    </div>
  );
}