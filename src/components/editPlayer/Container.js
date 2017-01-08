import EditPlayer from './Component';
import { connect } from 'react-redux';
import { removePlayer, editPlayer } from '../../actions/player';

const mapStateToProps = () => ({ });

const mapDispatchToProps = dispatch => ({
    onRemovePlayer: (playerId) => {
        dispatch(removePlayer(playerId));
    },
    onSavePlayer: (playerId, newPlayerName) => {
        dispatch(editPlayer(playerId, newPlayerName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlayer);
