import randomGenerator from '../utilities.js';

export const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const progressionLength = randomGenerator(5, 10);
  const progressionStep = randomGenerator(1, 5);
  let progressionElement = 0;

  for (let i = 0; i < progressionLength; i += 1) {
    progressionElement += progressionStep;
    progression.push(progressionElement);
  }
  return progression;
};

export const gameData = () => {
  const progression = getProgression();
  const hiddenElement = randomGenerator(1, progression.length - 2);
  const correctAnswer = String(progression[hiddenElement]);
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};
