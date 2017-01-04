import { ADD_ROUND, EDIT_ROUND, CLEAR_ROUNDS } from '../constants';
import { v4 } from 'node-uuid';

export const addRound = (scores) => {
    return {
        type: ADD_ROUND,
        roundId: v4(),
        scores
    };
};

export const editRound = (roundId, scores) => {
    return {
        type: EDIT_ROUND,
        roundId,
        scores,
    };
};

export const clearRounds = () => {
    return {
        type: CLEAR_ROUNDS,
    };
};
