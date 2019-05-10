import iterate from '../iterate';
import compose from '../compose';

// eslint-disable-next-line max-lines-per-function
describe('iterate', () => {
    test('basic', async () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
        };

        let total = 0;

        const func1 = (x) => { total += x; };

        const result = await iterate(gen1(), func1);

        expect(total).toEqual(6);
    });

    test('async', async () => {
        const delay = (ms: number, value: any): Promise<number> => new Promise((resolve, reject) => {
            setTimeout(
                () => resolve(value),
                ms,
            );
        });

        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
        };

        let total = 0;

        const func1 = async function func(x) {
            // eslint-disable-next-line require-atomic-updates
            total += await delay(10, x);
        };

        const result = await iterate(gen1(), func1);

        expect(total).toEqual(6);
    });

    test('with compose', async () => {
        const gen1 = function* gen() {
            yield { value: 1 };
            yield { value: 2 };
            yield { value: 3 };
        };

        let total = 0;

        const getValue = x => Promise.resolve(x.value);
        const add5 = async value => await value + 5;
        const sumWithTotal = async (value) => {
            // eslint-disable-next-line require-atomic-updates
            total += await value;
        };

        const result = await iterate(
            gen1(),
            compose(
                getValue,
                add5,
                sumWithTotal,
            ),
        );

        expect(total).toEqual(21);
    });
});
