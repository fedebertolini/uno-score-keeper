import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import GameCreation from './Component';
import { startGame, updateMaxScore } from '../../actions/game';

const mapStateToProps = (state) => {
    return {
        players: state.players,
        game: state.game,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGameStart: (maxScore) => {
            dispatch(updateMaxScore(maxScore));
            dispatch(startGame());
            hashHistory.push('/round');
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameCreation);
