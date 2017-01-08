import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../../constants';
require('./style.scss');

class RoundCreation extends React.Component {
    render() {
        return (
            <form className="round-creation-component" onSubmit={this.submitRound.bind(this)}>
                <table>
                    <tbody>
                        {this.props.players.map(player =>
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>
                                    <input ref={(input) => { this.scoreInputs[player.id] = input; }}
                                        min="0"
                                        type="number"
                                        defaultValue="0"></input>
                                </td>
                            </tr>,
                        )}
                    </tbody>
                </table>
                <button type="submit" className="button primary">Save</button>
            </form>
        );
    }

    componentWillMount() {
        const validStatus = [GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED];
        if (!validStatus.some(status => status === this.props.game.status)) {
            hashHistory.push('/');
        }
        this.scoreInputs = {};
    }

    submitRound(event) {
        event.preventDefault();
        const scores = {};
        this.props.players.forEach((player) => {
            const input = this.scoreInputs[player.id];
            scores[player.id] = input.value ? parseInt(input.value) : 0;
        });
        this.props.onAddRound(scores);
    }
}

RoundCreation.propTypes = {
    players: PropTypes.array.isRequired,
    game: PropTypes.object.isRequired,
    onAddRound: PropTypes.func.isRequired,
};

export default RoundCreation;
