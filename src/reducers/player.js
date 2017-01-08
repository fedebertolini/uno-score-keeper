import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../constants';

function addPlayer(players, action) {
    return [
        ...players,
        {
            id: action.playerId,
            name: action.playerName,
        },
    ];
}

function removePlayer(players, action) {
    return players.filter(player => player.id !== action.playerId);
}

function editPlayer(players, action) {
    return players.map((player) => {
        if (player.id === action.playerId) {
            return {
                id: player.id,
                name: action.newPlayerName,
            };
        }
        return player;
    });
}

const playerReducer = (state = {}, action) => {
    switch (action.type) {
    case ADD_PLAYER:
        return addPlayer(state, action);
    case REMOVE_PLAYER:
        return removePlayer(state, action);
    case EDIT_PLAYER:
        return editPlayer(state, action);
    default:
        return state;
    }
};

export default playerReducer;
