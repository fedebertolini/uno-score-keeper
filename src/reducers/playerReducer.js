import { ADD_PLAYER, REMOVE_PLAYER, EDIT_PLAYER } from '../constants';

export function playerReducer(state = {}, action) {
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


function addPlayer(state, action) {
    const players = [
        ...state.players,
        {
            id: action.playerId,
            name: action.playerName
        }
    ];
    return { ...state, players: players };
}

function removePlayer(state, action) {
    const players = state.players.filter((player) => player.id !== action.playerId);
    return { ...state, players: players };
}

function editPlayer(state, action) {
    const players = state.players.map((player) => {
        if (player.id === action.playerId) {
            return {
                id: player.id,
                name: action.newPlayerName
            };
        }
        return player;
    });
    return { ...state, players: players };
}
