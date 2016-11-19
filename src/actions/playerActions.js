import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../constants';

var playerIdCounter = 1;

export const addPlayer = (playerName) => {
    return {
        type: ADD_PLAYER,
        playerId: playerIdCounter++,
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
