import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import GameCreationContainer from '../gameCreation/Container';
import RoundTableContainer from '../roundTable/Container';
import RoundCreationContainer from '../roundCreation/Container';

require('./style.scss');

const App = () => (
    <div className="app-component">
        <div className="page">
            <h1>UNO Score Keeper</h1>

            <Router history={ hashHistory }>
                <Route path="/round/create/" component={RoundCreationContainer}></Route>
                <Route path="/round" component={RoundTableContainer}></Route>
                <Route path="/" component={GameCreationContainer}></Route>
            </Router>
        </div>
    </div>
);

export default App;
