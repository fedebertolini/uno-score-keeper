import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../constants';

class RoundTable extends React.Component {
    constructor(props) {
        super(props);

        this.roundScores = this.buildScores(props.players, props.rounds);
        this.winner = null;

        if (this.roundScores.length) {
            const lastRoundScores = this.roundScores[this.roundScores.length - 1].scores;
            const nonLosers = lastRoundScores.filter(score => score.accumulativePoints <= props.game.maxScore);

            if (nonLosers.length === 1) {
                this.winner = nonLosers[0];
                if (props.game.status === GAME_STATUS_IN_PROGRESS) {
                    props.onGameComplete();
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