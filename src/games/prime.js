import randomGenerator from '../utilities.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  const minMultiplier = Math.sqrt(number);
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= minMultiplier; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export const gameData = () => {
  const randomNumber = randomGenerator(2, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};
