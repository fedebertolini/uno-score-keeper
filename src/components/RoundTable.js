import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RoundTable = ({ rounds, players }) => (
    <div>
        <table>
            <thead>
                <tr>
                    { players.map(player => <th key={player.id}>{player.name}</th>) }
                </tr>
            </thead>
            <tbody>
                { rounds.length ? ScoreRows(players, rounds) : EmptyRow(players) }
            </tbody>
        </table>
        <Link to="/round/create/">New Round!</Link>
    </div>
);

const EmptyRow = players => (
    <tr>
        { players.map(player => <td key={player.id}>0</td>) }
    </tr>
);

const ScoreRows = (players, rounds) => {
    const roundScores = buildScores(players, rounds);
    return roundScores.map(round => (
        <tr key={round.roundId}>
            {round.scores.map(score =>(
                <td key={score.playerId}>{score.accumulativePoints}</td>
            ))}
        </tr>
    ));
}

const buildScores = (players, rounds) => {
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

RoundTable.propTypes = {
    players: PropTypes.array.isRequired,
    rounds: PropTypes.array.isRequired
};

export default RoundTable;
