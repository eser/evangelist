import curryRight from '../curryRight';

describe('curryRight', () => {
    test('basic', () => {
        const dec = (a, b) => a - b;

        const decWith5 = curryRight(dec, 5);

        const result = decWith5(3);

        expect(result).toEqual(-2);
    });
});
