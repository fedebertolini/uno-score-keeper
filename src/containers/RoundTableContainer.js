import { connect } from 'react-redux';
import React from 'react';
import { hashHistory } from 'react-router';
import RoundTable from '../components/RoundTable';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        rounds: state.rounds
    };
}

export default connect(mapStateToProps)(RoundTable);
