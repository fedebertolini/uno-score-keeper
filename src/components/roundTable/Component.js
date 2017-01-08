import React, { PropTypes } from 'react';
import { Link, hashHistory } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../../constants';

require('./style.scss');

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
            <div className="round-table-component">
                <label>Max Score: <strong>{this.props.game.maxScore}</strong></label>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            { this.props.players.map(player => <th key={player.id}>{player.name}</th>) }
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.roundScores.length ? this.scoreRows() : this.emptyRow() }
                    </tbody>
                </table>
                { this.props.game.status === GAME_STATUS_IN_PROGRESS &&
                    <Link className="button primary" to="/round/create/">New Round!</Link>
                }
                { this.props.winner && <h3>Winner: {this.props.winner.name}!</h3>}

                <button className="button danger" type="button" onClick={this.props.onGameRestart.bind(this)}>
                    Restart game
                </button>
            </div>
        );
    }

    emptyRow() {
        return (
            <tr>
                <td></td>
                { this.props.players.map(player => <td key={player.id}>0</td>) }
            </tr>
        );
    }

    scoreRows() {
        return this.props.roundScores.map((round, index) => (
            <tr key={round.roundId}>
                <td><strong>{index + 1}</strong></td>
                {round.scores.map(score => (
                    <td key={score.playerId} className={this.scoreClass(score)}>
                        {score.accumulativePoints}
                    </td>
                ))}
            </tr>
        ));
    }

    scoreClass(score) {
        if (score.accumulativePoints > this.props.game.maxScore) {
            return 'line-through text-red';
        }
        let cellClass = '';
        if (score.roundPoints === 0) {
            cellClass += 'underline ';
        }
        if (score.accumulativePoints >= (this.props.game.maxScore * 0.75)) {
            cellClass += 'text-warning ';
        }
        return cellClass;
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
    onGameRestart: PropTypes.func.isRequired,
};

export default RoundTable;
