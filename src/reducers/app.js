import { combineReducers } from 'redux';
import { gameReducer } from './game';
import { playerReducer } from './player';
import { roundReducer } from './round';

const appReducer = combineReducers({
    game: gameReducer,
    players: playerReducer,
    rounds: roundReducer
});

export default appReducer;
