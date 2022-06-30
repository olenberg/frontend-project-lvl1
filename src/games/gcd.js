import startGame from '../index.js';
import randomGenerator from '../utilities.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (first, second) => (second ? getGCD(second, first % second) : first);

export const gameData = () => {
  const firstNumber = randomGenerator(1, 50);
  const secondNumber = randomGenerator(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};

export default function startGcd() {
  startGame(gameDescription, gameData);
}
