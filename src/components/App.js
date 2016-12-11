import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';
import GameCreationContainer from '../containers/GameCreationContainer';
import RoundTableContainer from '../containers/RoundTableContainer';
import RoundCreationContainer from '../containers/RoundCreationContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>UNO Score Tracker</h1>
                <Router history={ hashHistory }>
                    <Route path="/" component={Home}></Route>
                    <Route path="/game" component={GameCreationContainer}></Route>
                    <Route path="/round/create/" component={RoundCreationContainer}></Route>
                    <Route path="/round" component={RoundTableContainer}></Route>
                </Router>
            </div>
        )
    }
}

export default App;
