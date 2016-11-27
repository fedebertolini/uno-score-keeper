import React, { PropTypes } from 'react';
import AddPlayerContainer from '../containers/AddPlayerContainer';
import EditPlayerContainer from '../containers/EditPlayerContainer';

const GameCreation = ({ onGameStart, players }) => (
    <div>
        <h2>Add the UNO players</h2>

        <AddPlayerContainer></AddPlayerContainer>

        <ul>
            {players.map(player =>
                <li key={player.id}>
                    <EditPlayerContainer player={player}></EditPlayerContainer>
                </li>
            )}
        </ul>

        <button type="button" onClick={onGameStart}>Start Game!</button>
    </div>
);

GameCreation.propTypes = {
    players: PropTypes.array.isRequired,
    onGameStart: PropTypes.func.isRequired
}

export default GameCreation;
