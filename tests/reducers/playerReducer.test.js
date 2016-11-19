import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../../src/constants';
import { playerReducer } from '../../src/reducers/playerReducer'

const baseState = [
    {
        id: 1,
        name: 'John',
    }
];

test('addPlayer reducer', () => {
    const action = {
        type: ADD_PLAYER,
        playerId: 2,
        playerName: 'Federico'
    };

    var state = playerReducer(baseState, action);

    expect(state).toEqual([
        {
            id: 1,
            name: 'John',
        },
        {
            id: 2,
            name: 'Federico',
        }
    ]);
});

test('removePlayer reducer', () => {
    const action = {
        type: REMOVE_PLAYER,
        playerId: 1
    };

    var state = playerReducer(baseState, action);

    expect(state).toEqual([]);
});

test('editPlayer reducer', () => {
    const action = {
        type: EDIT_PLAYER,
        playerId: 1,
        newPlayerName: 'Federico'
    };

    var state = playerReducer(baseState, action);

    expect(state).toEqual([
        {
            id: 1,
            name: 'Federico'
        }
    ]);
});
