import EditPlayer from '../components/EditPlayer';
import { connect } from 'react-redux';
import { removePlayer, editPlayer } from '../actions/playerActions';

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemovePlayer: (playerId) => {
            dispatch(removePlayer(playerId));
        },
        onSavePlayer: (playerId, newPlayerName) => {
            dispatch(editPlayer(playerId, newPlayerName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayer);
