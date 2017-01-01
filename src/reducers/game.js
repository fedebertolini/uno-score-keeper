import { CREATE_GAME, START_GAME, END_GAME } from '../constants';
import { GAME_STATUS_NOT_STARTED, GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../constants';

function createGame(state) {
    return {
        status: GAME_STATUS_NOT_STARTED,
        maxScore: 500
    };
}

export function gameReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_GAME:
            return createGame(state);
        case START_GAME:
            return { ...state, status: GAME_STATUS_IN_PROGRESS };
        case END_GAME:
            return { ...state, status: GAME_STATUS_FINISHED };
        default:
            return state;
    }
};
