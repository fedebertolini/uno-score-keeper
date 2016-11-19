import React, { PropTypes } from 'react';

const GameCreation = ({ onAddPlayer, players }) => (
    <div>
        <h2>Add the UNO players</h2>

        <div>
            <input type="text" id="add-player-name"></input>
            <button type="button" onClick={onAddPlayer}>Add</button>
        </div>

        <ul>
            {players.map(player =>
                <li>{player.name}</li>
            )}
        </ul>
    </div>
);

GameCreation.propTypes = {
    onAddPlayer: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired
}

export default GameCreation;
