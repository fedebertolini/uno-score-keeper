import { v4 } from 'node-uuid';
import { ADD_ROUND, EDIT_ROUND, CLEAR_ROUNDS } from '../constants';

export const addRound = scores => ({
    type: ADD_ROUND,
    roundId: v4(),
    scores,
});

export const editRound = (roundId, scores) => ({
    type: EDIT_ROUND,
    roundId,
    scores,
});

export const clearRounds = () => ({
    type: CLEAR_ROUNDS,
});
