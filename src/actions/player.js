import { v4 } from 'node-uuid';
import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../constants';

export const addPlayer = playerName => ({
    type: ADD_PLAYER,
    playerId: v4(),
    playerName,
});

export const removePlayer = playerId => ({
    type: REMOVE_PLAYER,
    playerId,
});

export const editPlayer = (playerId, newPlayerName) => ({
    type: EDIT_PLAYER,
    playerId,
    newPlayerName,
});
