import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addRound } from '../actions/roundActions';
import { hashHistory } from 'react-router';
import { GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED } from '../constants';

class RoundCreationContainer extends React.Component {
    render() {
        return (
            <form onSubmit={this.submitRound.bind(this)}>
                <table>
                    <tbody>
                        {this.props.players.map(player =>
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td><input type="number" min="0" ref={player.id} defaultValue="0"></input></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button type="submit">Save</button>
            </form>
        )
    }

    componentWillMount() {
        const validStatus = [GAME_STATUS_IN_PROGRESS, GAME_STATUS_FINISHED];
        if (!validStatus.some(status => status === this.props.game.status)) {
            hashHistory.push('/');
        }
    }

    submitRound(event) {
        event.preventDefault();
        let scores = {};
        this.props.players.forEach(player => {
            const input = this.refs[player.id];
            scores[player.id] = input.value ? parseInt(input.value) : 0;
        });
        this.props.onAddRound(scores);
    }
}

RoundCreationContainer.propTypes = {
    players: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        players: state.players,
        game: state.game,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddRound: (scores) => {
            dispatch(addRound(scores));
            hashHistory.push('/round');
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundCreationContainer);
