import { connect } from 'react-redux';
import GameCreation from '../components/GameCreation';
import { playerActions } from '../actions/playerActions';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlayer: (name) => {
            dispatch(playerActions.addPlayer(name));
        }
    }
}

const GameCreationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameCreation);

export default GameCreationContainer;
