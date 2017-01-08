import { CREATE_GAME, START_GAME, END_GAME, UPDATE_MAX_SCORE } from '../constants';

export const createGame = () => ({
    type: CREATE_GAME,
});

export const startGame = () => ({
    type: START_GAME,
});

export const endGame = () => ({
    type: END_GAME,
});

export const updateMaxScore = score => ({
    type: UPDATE_MAX_SCORE,
    score,
});
