import * as playerActions from '../../src/actions/player';
import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../../src/constants';

test('addPlayer action', () => {
    var action = playerActions.addPlayer('Federico');

    expect(action.type).toEqual(ADD_PLAYER);
    expect(action.playerName).toEqual('Federico');
    expect(action.playerId).toBeTruthy();

    var secondAction = playerActions.addPlayer('Sofia');

    expect(secondAction.type).toEqual(ADD_PLAYER);
    expect(secondAction.playerName).toEqual('Sofia');
    expect(secondAction.playerId).toBeTruthy();
});

test('removePlayer action', () => {
    var action = playerActions.removePlayer(1);
    expect(action).toEqual({
        type: REMOVE_PLAYER,
        playerId: 1
    });
});

test('editPlayer action', () => {
    var action = playerActions.editPlayer(1, 'Juan');
    expect(action).toEqual({
        type: EDIT_PLAYER,
        playerId: 1,
        newPlayerName: 'Juan'
    });
});
