import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App';
import appReducer from './reducers/appReducer';
import { createGame } from './actions/gameActions';

let store = createStore(appReducer, {
    game: {},
    players: [],
    rounds: []
});
store.dispatch(createGame());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.getElementById('app')
);
