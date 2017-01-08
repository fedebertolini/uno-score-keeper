import React, { PropTypes } from 'react';
import AddPlayerContainer from '../addPlayer/Container';
import EditPlayerContainer from '../editPlayer/Container';
import { GAME_STATUS_NOT_STARTED } from '../../constants';
import { hashHistory } from 'react-router';
require('./style.scss');

class GameCreation extends React.Component {
    render() {
        return (
            <div className="game-creation-component">
                <h2>Add players</h2>

                <AddPlayerContainer></AddPlayerContainer>

                <ul>
                    {this.props.players.map(player =>
                        <li key={player.id}>
                            <EditPlayerContainer player={player}></EditPlayerContainer>
                        </li>,
                    )}
                </ul>

                <div className="max-score-container">
                    <label>
                        Max Score:
                        <input type="number"
                            ref={(input) => { this.maxScore = input; }}
                            defaultValue={this.props.game.maxScore}>
                        </input>
                    </label>
                </div>

                <button className="button primary" type="button"
                    onClick={this.startGame.bind(this)}>Start Game!</button>
            </div>
        );
    }

    componentWillMount() {
        if (this.props.game.status !== GAME_STATUS_NOT_STARTED) {
            hashHistory.push('/round/');
        }
    }

    startGame() {
        if (this.props.players && this.props.players.length >= 2) {
            this.props.onGameStart(parseInt(this.maxScore.value, 10));
        }
    }
}

GameCreation.propTypes = {
    players: PropTypes.array.isRequired,
    game: PropTypes.object.isRequired,
    onGameStart: PropTypes.func.isRequired,
};

export default GameCreation;
