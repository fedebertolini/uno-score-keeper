import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app/Component';
import appReducer from './reducers/app';
import { createGame } from './actions/game';
import { loadState, saveState } from './services/storePersistance';

require('./main.scss');

const persistedState = loadState();
const store = createStore(appReducer, persistedState || {
    game: {},
    players: [],
    rounds: [],
});

store.subscribe(() => {
    saveState(store.getState());
});

if (!store.getState().game.status) {
    store.dispatch(createGame());
}

render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('app'),
);
