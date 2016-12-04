import * as roundActions from '../../src/actions/roundActions';
import { ADD_ROUND, EDIT_ROUND } from '../../src/constants';

test('addRound action', () => {
    var scores = {
        1: 10,
        2: 0
    };
    var action = roundActions.addRound(scores);

    expect(action.type).toEqual(ADD_ROUND);
    expect(action.roundId).toBeTruthy();
    expect(action.scores).toEqual(scores);
});

test('editRound action', () => {
    var scores = {
        1: 10,
        2: 0
    };

    var action = roundActions.editRound(1, scores);
    expect(action).toEqual({
        type: EDIT_ROUND,
        roundId: 1,
        scores: scores
    });
});
