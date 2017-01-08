import * as gameActions from '../../src/actions/game';
import { CREATE_GAME, START_GAME, END_GAME, UPDATE_MAX_SCORE } from '../../src/constants';

test('createGame action', () => {
    const action = gameActions.createGame();
    expect(action).toBeTruthy();
    expect(action.type).toBe(CREATE_GAME);
});

test('startGame action', () => {
    const action = gameActions.startGame();
    expect(action).toBeTruthy();
    expect(action.type).toBe(START_GAME);
});

test('endGame action', () => {
    const action = gameActions.endGame();
    expect(action).toBeTruthy();
    expect(action.type).toBe(END_GAME);
});

test('updateScore action', () => {
    const action = gameActions.updateMaxScore(300);
    expect(action).toBeTruthy();
    expect(action.type).toBe(UPDATE_MAX_SCORE);
    expect(action.score).toBe(300);
});
