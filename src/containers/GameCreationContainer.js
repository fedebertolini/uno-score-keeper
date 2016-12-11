import { connect } from 'react-redux';
import React from 'react';
import { hashHistory } from 'react-router';
import GameCreation from '../components/GameCreation';
import { startGame } from '../actions/gameActions';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        game: state.game,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGameStart: () => {
            dispatch(startGame());
            hashHistory.push('/round');
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCreation);
