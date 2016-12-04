import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Link to="/game"> Start Game! </Link>
            </div>
        )
    }
}

export default Home;
