import { ADD_ROUND, EDIT_ROUND } from '../constants';
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
