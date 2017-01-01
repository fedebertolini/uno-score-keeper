import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../constants';
import { v4 } from 'node-uuid';

export const addPlayer = (playerName) => {
    return {
        type: ADD_PLAYER,
        playerId: v4(),
        playerName,
    };
};

export const removePlayer = (playerId) => {
    return {
        type: REMOVE_PLAYER,
        playerId,
    };
};

export const editPlayer = (playerId, newPlayerName) => {
    return {
        type: EDIT_PLAYER,
        playerId,
        newPlayerName,
    };
};
