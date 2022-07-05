import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const gameData = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default function startEven() {
  startGame(gameDescription, gameData);
}
