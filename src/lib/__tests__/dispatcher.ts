import dispatcher from '../dispatcher';

test('dispatcher', async () => {
    const initialState = { quarter: 1, year: 2018, sum: 1 };

    const actionAdd5 = (state, next) => next({ ...state, sum: state.sum + 5 });
    const actionDiv2 = (state, next) => next({ ...state, sum: state.sum / 2 });

    const result = await dispatcher(initialState, [ actionAdd5, actionDiv2 ]);

    expect(result).toEqual({ quarter: 1, year: 2018, sum: 3 });
});
