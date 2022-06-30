import startGame from '../index.js';
import randomGenerator from '../utilities.js';

export const gameDescription = 'What number is missing in the progression?';

const getProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + (step * i));
  }
  return progression;
};

export const gameData = () => {
  const progressionLength = randomGenerator(5, 10);
  const progressionStart = randomGenerator(1, 10);
  const progressionStep = randomGenerator(1, 5);
  const progression = getProgression(progressionLength, progressionStart, progressionStep);
  const hiddenElement = randomGenerator(1, progression.length - 2);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};

export default function startProgression() {
  startGame(gameDescription, gameData);
}
