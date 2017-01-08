import * as playerActions from '../../src/actions/player';
import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../../src/constants';

test('addPlayer action', () => {
    const action = playerActions.addPlayer('Federico');

    expect(action.type).toEqual(ADD_PLAYER);
    expect(action.playerName).toEqual('Federico');
    expect(action.playerId).toBeTruthy();

    const secondAction = playerActions.addPlayer('Sofia');

    expect(secondAction.type).toEqual(ADD_PLAYER);
    expect(secondAction.playerName).toEqual('Sofia');
    expect(secondAction.playerId).toBeTruthy();
});

test('removePlayer action', () => {
    const action = playerActions.removePlayer(1);
    expect(action).toEqual({
        type: REMOVE_PLAYER,
        playerId: 1,
    });
});

test('editPlayer action', () => {
    const action = playerActions.editPlayer(1, 'Juan');
    expect(action).toEqual({
        type: EDIT_PLAYER,
        playerId: 1,
        newPlayerName: 'Juan',
    });
});
