import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
    return {
        game: state.game,
    };
}

export default connect(mapStateToProps)(Home);
