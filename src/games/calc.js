import startGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

export const gameDescription = 'What is the result of the expression?';

const summation = (firstNumber, secondNumber) => [firstNumber + secondNumber, '+'];
const subtraction = (firstNumber, secondNumber) => [firstNumber - secondNumber, '-'];
const multiplication = (firstNumber, secondNumber) => [firstNumber * secondNumber, '*'];
const operations = [summation, subtraction, multiplication];

export const gameData = () => {
  const expression = operations[getRandomNumber(0, operations.length - 1)];
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const [correctAnswer, operationSymbol] = expression(firstNumber, secondNumber);
  const question = `${firstNumber} ${operationSymbol} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};

export default function startCalc() {
  startGame(gameDescription, gameData);
}
