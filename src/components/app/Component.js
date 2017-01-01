import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import HomeContainer from '../home/Container';
import GameCreationContainer from '../gameCreation/Container';
import RoundTableContainer from '../roundTable/Container';
import RoundCreationContainer from '../roundCreation/Container';

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
