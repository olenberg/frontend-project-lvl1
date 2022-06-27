import randomGenerator from '../utilities.js';

export const gameDescription = 'What is the result of the expression?';

const summation = (firstNumber, secondNumber) => [firstNumber + secondNumber, '+'];
const subtraction = (firstNumber, secondNumber) => [firstNumber - secondNumber, '-'];
const multiplication = (firstNumber, secondNumber) => [firstNumber * secondNumber, '*'];
const operations = [summation, subtraction, multiplication];

export const gameData = () => {
  const expression = operations[randomGenerator(0, operations.length - 1)];
  const firstNumber = randomGenerator(1, 10);
  const secondNumber = randomGenerator(1, 10);
  const [correctAnswer, operationSymbol] = expression(firstNumber, secondNumber);
  const question = `${firstNumber} ${operationSymbol} ${secondNumber}`;
  return [question, correctAnswer.toString()];
};
