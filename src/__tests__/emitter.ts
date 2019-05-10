import emitter from '../emitter';

// eslint-disable-next-line max-lines-per-function
describe('emitter', () => {
    test('basic', async () => {
        let sideEffectCounter = 0;

        const subscriberOne = () => { sideEffectCounter += 1; };
        const subscriberTwo = () => { sideEffectCounter += 2; };

        const events = {
            calculate: [ subscriberOne, subscriberTwo ],
        };

        await emitter(events, 'calculate');

        expect(sideEffectCounter).toEqual(3);
    });

    test('with parameters', async () => {
        let sideEffectCounter = 0;

        const subscriberOne = (value) => { sideEffectCounter += value; };
        const subscriberTwo = (value) => { sideEffectCounter += value * 2; };

        const events = {
            calculate: [ subscriberOne, subscriberTwo ],
        };

        const result = await emitter(events, 'calculate', [ 5 ]);

        expect(sideEffectCounter).toEqual(15);
    });

    test('with wildcard events', async () => {
        let sideEffectCounter = 0;

        const subscriberOne = () => { sideEffectCounter += 1; };
        const subscriberTwo = () => { sideEffectCounter -= 2; };

        const events = {
            inc: [ subscriberOne ],
            dec: [ subscriberTwo ],
        };

        await emitter(events, '*');

        expect(sideEffectCounter).toEqual(-1);
    });

    test('with subsriber', async () => {
        let sideEffectCounter = 0;

        const subscriberOne = (value) => { sideEffectCounter += value; };
        const subscriberTwo = (value) => { sideEffectCounter += value * 2; };

        const events = {
            calculate: [ subscriberOne, subscriberTwo ],
        };

        const logs: Array<any> = [];
        const logger = x => logs.push(x);

        const result = await emitter(events, 'calculate', [ 5 ], [ logger ]);

        expect(sideEffectCounter).toEqual(15);
        expect(logs).toEqual([
            {
                event: 'calculate',
                subscriber: 'subscriberOne',
                args: [ 5 ],
            },
            {
                event: 'calculate',
                subscriber: 'subscriberTwo',
                args: [ 5 ],
            },
        ]);
    });
});
