import React, { PropTypes } from 'react';
import AddPlayerContainer from '../containers/AddPlayerContainer';

const GameCreation = ({ onAddPlayer, players }) => (
    <div>
        <h2>Add the UNO players</h2>

        <AddPlayerContainer></AddPlayerContainer>

        <ul>
            {players.map(player =>
                <li key={player.id}>{player.name}</li>
            )}
        </ul>
    </div>
);

GameCreation.propTypes = {
    players: PropTypes.array.isRequired
}

export default GameCreation;
