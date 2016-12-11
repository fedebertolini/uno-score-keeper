import { connect } from 'react-redux';
import { addRound } from '../actions/roundActions';
import { hashHistory } from 'react-router';
import RoundCreation from '../components/RoundCreation';

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

export default connect(mapStateToProps, mapDispatchToProps)(RoundCreation);
