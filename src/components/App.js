import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './Home'
import GameCreation from './GameCreation'
import RoundEdition from './RoundEdition'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>UNO Score Tracker</h1>
                <Router history={ browserHistory }>
                    <Route path="/" component={Home}></Route>
                    <Route path="/start" component={GameCreation}></Route>
                    <Route path="/round/:roundId" component={RoundEdition}></Route>
                </Router>
            </div>
        )
    }
}

export default App;
