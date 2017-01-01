import { ADD_ROUND, EDIT_ROUND } from '../../src/constants';
import { roundReducer } from '../../src/reducers/round'

const baseState = [
    {
        id: 1,
        scores: {
            1: 45,
            2: 0,
            3: 13,
        }
    }
];

test('addRound reducer', () => {
    const action = {
        type: ADD_ROUND,
        roundId: 2,
        scores: {
            1: 10,
            2: 0,
            3: 34,
        }
    };

    var state = roundReducer(baseState, action);

    expect(state).toEqual([
        {
            id: 1,
            scores: {
                1: 45,
                2: 0,
                3: 13,
            }
        },
        {
            id: 2,
            scores: {
                1: 10,
                2: 0,
                3: 34,
            }
        }
    ]);
});

test('editRound reducer', () => {
    const action = {
        type: EDIT_ROUND,
        roundId: 1,
        scores: {
            1: 0,
            2: 32,
            3: 43
        }
    };

    var state = roundReducer(baseState, action);

    expect(state).toEqual([
        {
            id: 1,
            scores: {
                1: 0,
                2: 32,
                3: 43
            }
        }
    ]);
});
