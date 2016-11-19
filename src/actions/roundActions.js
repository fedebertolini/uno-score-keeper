import { ADD_ROUND, EDIT_ROUND } from '../constants';

var roundIdCounter = 1;

export const addRound = () => {
    return {
        type: ADD_ROUND,
        roundId: roundIdCounter++,
    };
};

export const editRound = (roundId, scores) => {
    return {
        type: EDIT_ROUND,
        roundId,
        scores,
    };
};
