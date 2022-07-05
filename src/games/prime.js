import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  const minMultiplier = Math.sqrt(number);
  for (let i = 2; i <= minMultiplier; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export const gameData = () => {
  const randomNumber = getRandomNumber(2, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default function startPrime() {
  startGame(gameDescription, gameData);
}
