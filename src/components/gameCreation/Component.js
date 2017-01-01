import React, { PropTypes } from 'react';
import AddPlayerContainer from '../addPlayer/Container';
import EditPlayerContainer from '../editPlayer/Container';
import { GAME_STATUS_NOT_STARTED } from '../../constants';
import { hashHistory } from 'react-router';

class GameCreation extends React.Component {
    render() {
        return (
            <div>
                <h2>Add the UNO players</h2>

                <AddPlayerContainer></AddPlayerContainer>

                <ul>
                    {this.props.players.map(player =>
                        <li key={player.id}>
                            <EditPlayerContainer player={player}></EditPlayerContainer>
                        </li>
                    )}
                </ul>

                <button type="button" onClick={this.startGame.bind(this)}>Start Game!</button>
            </div>
        );
    }

    componentWillMount() {
        if (this.props.game.status !== GAME_STATUS_NOT_STARTED) {
            hashHistory.push('/');
        }
    }

    startGame() {
        if (this.props.players && this.props.players.length >= 2) {
            this.props.onGameStart();
        }
    }
};

GameCreation.propTypes = {
    players: PropTypes.array.isRequired,
    onGameStart: PropTypes.func.isRequired
}

export default GameCreation;
