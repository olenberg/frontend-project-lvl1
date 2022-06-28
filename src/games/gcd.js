import randomGenerator from '../utilities.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  if (secondNumber) {
    return getGCD(secondNumber, firstNumber % secondNumber);
  }
  return firstNumber;
}

export const gameData = () => {
  const firstNumber = randomGenerator(1, 50);
  const secondNumber = randomGenerator(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return [question, correctAnswer.toString()];
};
