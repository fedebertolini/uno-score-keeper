import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../../constants';

class RoundTable extends React.Component {

    componentWillMount() {
        const validStatus = [GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED];
        if (!validStatus.some(status => status === this.props.game.status)) {
            hashHistory.push('/');
            return;
        }

        if (this.props.winner && this.props.game.status === GAME_STATUS_IN_PROGRESS) {
            this.props.onGameComplete();
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            { this.props.players.map(player => <th key={player.id}>{player.name}</th>) }
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.roundScores.length ? this.scoreRows() : this.emptyRow() }
                    </tbody>
                </table>
                { this.props.game.status === GAME_STATUS_IN_PROGRESS && <Link to="/round/create/">New Round!</Link> }
                { this.props.winner && <h3>Winner: {this.props.winner.name}!</h3>}
            </div>
        )
    }

    emptyRow() {
        return (
            <tr>
                { this.props.players.map(player => <td key={player.id}>0</td>) }
            </tr>
        );
    }

    scoreRows() {
        return this.props.roundScores.map(round => (
            <tr key={round.roundId}>
                {round.scores.map(score =>(
                    <td key={score.playerId}>{score.accumulativePoints}</td>
                ))}
            </tr>
        ));
    }
}

RoundTable.propTypes = {
    players: PropTypes.array.isRequired,
    roundScores: PropTypes.array.isRequired,
    game: PropTypes.shape({
        status: React.PropTypes.string,
        maxScore: React.PropTypes.number,
    }).isRequired,
    winner: PropTypes.shape({
        id: React.PropTypes.string,
        name: React.PropTypes.string,
    }),
    onGameComplete: PropTypes.func.isRequired,
};

export default RoundTable;
