import * as playerActions from '../../src/actions/playerActions';
import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../../src/constants';

test('addPlayer action', () => {
    var action = playerActions.addPlayer('Federico');
    expect(action).toEqual({
        type: ADD_PLAYER,
        playerId: 1,
        playerName: 'Federico'
    });

    var action = playerActions.addPlayer('Sofia');
    expect(action).toEqual({
        type: ADD_PLAYER,
        playerId: 2,
        playerName: 'Sofia'
    });
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
