import * as roundActions from '../../src/actions/roundActions';
import { ADD_ROUND, EDIT_ROUND } from '../../src/constants';

test('addRound action', () => {
    var action = roundActions.addRound();
    expect(action).toEqual({
        type: ADD_ROUND,
        roundId: 1
    });
});

test('editRound action', () => {
    var roundData = [
        {
            playerId: 1,
            score: 50
        }
    ];

    var action = roundActions.editRound(1, roundData);
    expect(action).toEqual({
        type: EDIT_ROUND,
        roundId: 1,
        roundData: roundData
    });
});
