import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';
import GameCreationContainer from '../containers/GameCreationContainer';
import RoundEdition from './RoundEdition';
import RoundTableContainer from '../containers/RoundTableContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>UNO Score Tracker</h1>
                <Router history={ hashHistory }>
                    <Route path="/" component={Home}></Route>
                    <Route path="/create" component={GameCreationContainer}></Route>
                    <Route path="/round/:roundId" component={RoundEdition}></Route>
                    <Route path="/round" component={RoundTableContainer}></Route>
                </Router>
            </div>
        )
    }
}

export default App;
