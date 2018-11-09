import curry from '../curry';

test('curry', () => {
    const sum = (a, b) => a + b;

    const sumWith5 = curry(sum, 5);

    const result = sumWith5(3);

    expect(result).toEqual(8);
});
