import randomGenerator from '../utilities.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export const gameData = () => {
  const randomNumber = randomGenerator(1, 100);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};