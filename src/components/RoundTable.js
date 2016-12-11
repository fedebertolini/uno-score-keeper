import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../constants';

class RoundTable extends React.Component {

    componentWillMount() {
        const validStatus = [GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED];
        if (!validStatus.some(status => status === this.props.game.status)) {
            hashHistory.push('/');
            return;
        }

        this.roundScores = this.buildScores(this.props.players, this.props.rounds);
        this.winner = null;

        if (this.roundScores.length) {
            const lastRoundScores = this.roundScores[this.roundScores.length - 1].scores;
            const nonLosers = lastRoundScores.filter(score => score.accumulativePoints <= this.props.game.maxScore);

            if (nonLosers.length === 1) {
                const winnerId = nonLosers[0].playerId;
                this.winner = this.props.players.find(player => player.id === winnerId);
                if (this.props.game.status === GAME_STATUS_IN_PROGRESS) {
                    this.props.onGameComplete();
                }
            }
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
                        { this.props.rounds.length ? this.scoreRows() : this.emptyRow() }
                    </tbody>
                </table>
                { this.props.game.status === GAME_STATUS_IN_PROGRESS && <Link to="/round/create/">New Round!</Link> }
                { this.winner && <h3>Winner: {this.winner.name}!</h3>}
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
        return this.roundScores.map(round => (
            <tr key={round.roundId}>
                {round.scores.map(score =>(
                    <td key={score.playerId}>{score.accumulativePoints}</td>
                ))}
            </tr>
        ));
    }

    buildScores(players, rounds) {
        let accumulativePoints = {};
        players.forEach(player => accumulativePoints[player.id] = 0);

        return rounds.map(round => ({
            roundId: round.id,
            scores: players.map(player => ({
                playerId: player.id,
                roundPoints: round.scores[player.id],
                accumulativePoints: (accumulativePoints[player.id] += round.scores[player.id])
            }))
        }));
    };
}

RoundTable.propTypes = {
    players: PropTypes.array.isRequired,
    rounds: PropTypes.array.isRequired,
    game: PropTypes.shape({
        status: React.PropTypes.string,
        maxScore: React.PropTypes.number
    }).isRequired,
    onGameComplete: PropTypes.func.isRequired,
};

export default RoundTable;
