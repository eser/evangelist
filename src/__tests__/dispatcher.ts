import dispatcher from '../dispatcher';

describe('dispatcher', () => {
    test('basic', async () => {
        const initialState = { quarter: 1, year: 2018, sum: 1 };

        const actionAdd5 = (state, next) => next({ ...state, sum: state.sum + 5 });
        const actionDiv2 = (state, next) => next({ ...state, sum: state.sum / 2 });

        const result = await dispatcher(initialState, [ actionAdd5, actionDiv2 ]);

        expect(result).toEqual({ quarter: 1, year: 2018, sum: 3 });
    });

    test('with subscriber', async () => {
        const initialState = { quarter: 1, year: 2018, sum: 1 };

        const actionAdd5 = (state, next) => next({ ...state, sum: state.sum + 5 });
        const actionDiv2 = (state, next) => next({ ...state, sum: state.sum / 2 });

        const logs: Array<any> = [];
        const logger = x => logs.push(x);

        const result = await dispatcher(initialState, [ actionAdd5, actionDiv2 ], [ logger ]);

        expect(result).toEqual({ quarter: 1, year: 2018, sum: 3 });
        expect(logs).toEqual([
            {
                action: 'actionAdd5',
                previousState: { quarter: 1, year: 2018, sum: 1 },
                newState: { quarter: 1, year: 2018, sum: 6 },
            },
            {
                action: 'actionDiv2',
                previousState: { quarter: 1, year: 2018, sum: 6 },
                newState: { quarter: 1, year: 2018, sum: 3 },
            },
        ]);
    });
});
