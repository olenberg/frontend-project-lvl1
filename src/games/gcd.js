import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => (second ? getGCD(second, first % second) : first);

export const getRoundData = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};

export default function startGcd() {
  startGame(gameDescription, getRoundData);
}
