import { connect } from 'react-redux';
import App from '../components/App';
import { createGame } from '../actions/gameActions';

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
};

export default connect(mapStateToProps)(App);
