import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App';
import appReducer from './reducers/appReducer';
import { createGame } from './actions/gameActions';
import { loadState, saveState } from './services/storePersistance';

const persistedState = loadState();
let store = createStore(appReducer, persistedState || {
    game: {},
    players: [],
    rounds: []
});

store.subscribe(() => {
    saveState(store.getState());
})

if (!store.getState().game.status) {
    store.dispatch(createGame());
}

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('app')
);
