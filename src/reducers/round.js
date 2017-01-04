import { ADD_ROUND, EDIT_ROUND, CLEAR_ROUNDS } from '../constants';

export function roundReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ROUND:
            return addRound(state, action);
        case EDIT_ROUND:
            return editRound(state, action);
        case CLEAR_ROUNDS:
            return clearRounds();
        default:
            return state;
    }
};

function addRound(rounds, action) {
    return [
        ...rounds,
        {
            id: action.roundId,
            scores: action.scores
        }
    ];
}

function editRound(rounds, action) {
    return rounds.map((round) => {
        if (round.id === action.roundId) {
            return {
                id: round.id,
                scores: Object.assign({}, action.scores)
            };
        }
        return round;
    });
}

function clearRounds() {
    return [];
}
