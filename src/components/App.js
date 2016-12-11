import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import GameCreationContainer from '../containers/GameCreationContainer';
import RoundTableContainer from '../containers/RoundTableContainer';
import RoundCreationContainer from '../containers/RoundCreationContainer';

const App = () => (
    <div>
        <h1>UNO Score Tracker</h1>

        <Router history={ hashHistory }>
            <Route path="/game" component={GameCreationContainer}></Route>
            <Route path="/round/create/" component={RoundCreationContainer}></Route>
            <Route path="/round" component={RoundTableContainer}></Route>
            <Route path="/" component={HomeContainer}></Route>
        </Router>
    </div>
);

export default App;
