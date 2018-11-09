import curryRight from '../curryRight';

test('curryRight', () => {
    const dec = (a, b) => a - b;

    const decWith5 = curryRight(dec, 5);

    const result = decWith5(3);

    expect(result).toEqual(-2);
});
