import React from 'react';
import { Link, hashHistory } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../constants';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Link to="/game"> Start Game! </Link>
            </div>
        )
    }

    componentWillMount() {
        const status = this.props.game.status;
        if (status === GAME_STATUS_IN_PROGRESS || status === GAME_STATUS_FINISHED) {
            hashHistory.push('/round');
        }
    }
}

export default Home;
