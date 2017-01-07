import { CREATE_GAME, START_GAME, END_GAME, UPDATE_MAX_SCORE } from '../constants';

export const createGame = () => {
    return {
        type: CREATE_GAME,
    };
};

export const startGame = () => {
    return {
        type: START_GAME,
    };
};

export const endGame = () => {
    return {
        type: END_GAME,
    };
};

export const updateMaxScore = (score) => {
    return {
        type: UPDATE_MAX_SCORE,
        score: score,
    };
};
