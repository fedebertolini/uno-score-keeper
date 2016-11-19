import { ADD_ROUND, EDIT_ROUND } from '../constants';

export function roundReducer(state = {}, action) {
    switch (action.type) {
        case ADD_ROUND:
            return addRound(state, action);
        case EDIT_ROUND:
            return editRound(state, action);
        default:
            return state;
    }
};

function addRound(state, action) {
    const rounds = [
        ...state.rounds,
        {
            id: action.roundId,
            scores: { }
        }
    ];
    return { ...state, rounds: rounds };
}

function editRound(state, action) {
    const rounds = state.rounds.map((round) => {
        if (round.id === action.roundId) {
            return {
                id: round.id,
                scores: Object.assign({}, action.scores)
            };
        }
        return round;
    });
    return { ...state, rounds: rounds };
}
