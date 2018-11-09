import emitter from '../emitter';

test('emitter', async () => {
    let sideEffectCounter = 0;

    const subscriberOne = (value) => sideEffectCounter += value;
    const subscriberTwo = (value) => sideEffectCounter += value * 2;

    const events = {
        calculate: [ subscriberOne, subscriberTwo ],
    };

    const result = await emitter(events, 'calculate', [ 5 ]);

    expect(sideEffectCounter).toEqual(15);
});
