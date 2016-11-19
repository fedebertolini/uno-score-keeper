import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';
import GameCreationContainer from '../containers/GameCreationContainer';
import RoundEdition from './RoundEdition';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>UNO Score Tracker</h1>
                <Router history={ hashHistory }>
                    <Route path="/" component={Home}></Route>
                    <Route path="/start" component={GameCreationContainer}></Route>
                    <Route path="/round/:roundId" component={RoundEdition}></Route>
                </Router>
            </div>
        )
    }
}

export default App;
