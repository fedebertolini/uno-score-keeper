import { connect } from 'react-redux';
import React from 'react';
import { hashHistory } from 'react-router';
import RoundTable from '../components/RoundTable';
import { endGame } from '../actions/gameActions'

const mapStateToProps = (state) => {
    return {
        players: state.players,
        rounds: state.rounds,
        game: state.game,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGameComplete: () => {
            dispatch(endGame());
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoundTable);
