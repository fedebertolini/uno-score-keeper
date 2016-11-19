import { combineReducers } from 'redux';
import { gameReducer } from './gameReducer';
import { playerReducer } from './playerReducer';
import { roundReducer } from './roundReducer';

const appReducer = combineReducers({
    game: gameReducer,
    players: playerReducer,
    rounds: roundReducer
});

export default appReducer;
