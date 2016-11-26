import { connect } from 'react-redux';
import GameCreation from '../components/GameCreation';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(GameCreation);
