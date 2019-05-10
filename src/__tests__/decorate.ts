import decorate from '../decorate';

describe('decorate', () => {
    test('basic', () => {
        let generator = () => 5;

        generator = decorate(generator, func => func() * 2);
        generator = decorate(generator, func => func() + 1);

        const result = generator();

        expect(result).toEqual(11);
    });
});
