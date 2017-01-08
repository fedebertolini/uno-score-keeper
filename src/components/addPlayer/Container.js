import { connect } from 'react-redux';
import { addPlayer } from '../../actions/player';
import AddPlayer from './Component';

const mapStateToProps = () => ({ });

const mapDispatchToProps = dispatch => ({
    onAddPlayer: (name) => {
        dispatch(addPlayer(name));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
