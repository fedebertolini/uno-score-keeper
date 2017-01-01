import { connect } from 'react-redux';
import Home from './Component';

const mapStateToProps = (state) => {
    return {
        game: state.game,
    };
}

export default connect(mapStateToProps)(Home);
