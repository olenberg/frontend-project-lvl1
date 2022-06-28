#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameDescription, gameData } from '../src/games/gcd.js';

startGame(gameDescription, gameData);
