import React, { PropTypes } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';
import GameCreationContainer from '../containers/GameCreationContainer';
import RoundTableContainer from '../containers/RoundTableContainer';
import RoundCreationContainer from '../containers/RoundCreationContainer';
import { GAME_STATUS_NOT_STARTED, GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../constants';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>UNO Score Tracker</h1>

                <Router history={ hashHistory }>
                    <Route path="/game" component={GameCreationContainer} onEnter={this.homeOnEnter.bind(this)}></Route>
                    <Route path="/round/create/" component={RoundCreationContainer} onEnter={this.roundCreateOnEnter.bind(this)}></Route>
                    <Route path="/round" component={RoundTableContainer} onEnter={this.roundTableOnEnter.bind(this)}></Route>
                    <Route path="/" component={Home} onEnter={this.homeOnEnter.bind(this)}></Route>
                </Router>
            </div>
        )
    }

    isCurrentStatus(statusArray) {
        const currentStatus = this.props.game.status;
        return statusArray.some(status => currentStatus === status);
    }

    homeOnEnter() {
        const statusArray = [GAME_STATUS_NOT_STARTED];
        if (!this.isCurrentStatus(statusArray)) {
            hashHistory.push('/round');
        }
    }

    roundTableOnEnter() {
        const statusArray = [GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED];
        if (!this.isCurrentStatus(statusArray)) {
            hashHistory.push('/');
        }
    }

    roundCreateOnEnter() {
        const statusArray = [GAME_STATUS_IN_PROGRESS];
        if (!this.isCurrentStatus(statusArray)) {
            hashHistory.push('/');
        }
    }
}

App.propTypes = {
    game: PropTypes.shape({
        status: React.PropTypes.string,
        maxScore: React.PropTypes.number
    }).isRequired,
};

export default App;
