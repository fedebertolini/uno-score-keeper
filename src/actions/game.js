import { CREATE_GAME, START_GAME, END_GAME } from '../constants';

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
