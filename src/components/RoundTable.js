import React, { PropTypes } from 'react';

const RoundTable = ({ rounds, players }) => (
    <table>
        <thead>
            <tr>
                { players.map(player => <th key={player.id}>{player.name}</th>) }
            </tr>
        </thead>
        <tbody>
            { EmptyRow(players) }
        </tbody>
    </table>
);

const EmptyRow = players => (
    <tr>
        { players.map(player => <td key={player.id}>0</td>) }
    </tr>
);

RoundTable.propTypes = {
    players: PropTypes.array.isRequired,
    rounds: PropTypes.array.isRequired
}

export default RoundTable;
