import { connect } from 'react-redux';
import { addRound } from '../../actions/round';
import { hashHistory } from 'react-router';
import RoundCreation from './Component';

const mapStateToProps = state => ({
    players: state.players,
    game: state.game,
});

const mapDispatchToProps = dispatch => ({
    onAddRound: (scores) => {
        dispatch(addRound(scores));
        hashHistory.push('/round');
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoundCreation);
