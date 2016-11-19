import { CREATE_GAME, START_GAME, END_GAME } from '../../src/constants';
import { GAME_STATUS_NOT_STARTED, GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../../src/constants';
import { gameReducer } from '../../src/reducers/gameReducer'

const baseState = {
    gameStatus: GAME_STATUS_NOT_STARTED,
    maxScore: 500,
    players: [],
    rounds: [],
};

test('createGame reducer', () => {
    const action = {
        type: CREATE_GAME
    };

    var state = gameReducer({}, action);
    expect(state).toEqual(baseState);
});

test('startGame reducer', () => {
    const action = {
        type: START_GAME
    };

    var state = gameReducer(baseState, action);
    expect(state.gameStatus).toEqual(GAME_STATUS_IN_PROGRESS);
});

test('endGame reducer', () => {
    const action = {
        type: END_GAME
    };

    var state = gameReducer(baseState, action);
    expect(state.gameStatus).toEqual(GAME_STATUS_FINISHED);
});
