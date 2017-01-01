import { connect } from 'react-redux';
import { addPlayer } from '../../actions/playerActions';
import AddPlayer from './Component';

const mapStateToProps = (state) => {
    return { };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlayer: (name) => {
            dispatch(addPlayer(name));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
