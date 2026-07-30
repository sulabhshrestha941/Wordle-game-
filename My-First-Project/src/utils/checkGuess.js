export function checkGuess(guess, answer) {
  const guessLetters = guess.split('');
  const answerLetters = answer.split('');

  const result = guessLetters.map((letter) => ({ letter, status: 'absent' }));

  const letterCounts = {};
  for (const letter of answerLetters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === answerLetters[i]) {
      result[i].status = 'correct';
      letterCounts[guessLetters[i]]--;
    }
  }

  for (let i = 0; i < guessLetters.length; i++) {
    if (result[i].status === 'correct') continue;

    const letter = guessLetters[i];

    if (letterCounts[letter] > 0) {
      result[i].status = 'present';
      letterCounts[letter]--;
    }
  }

  return result;
}