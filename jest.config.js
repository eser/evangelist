const jestConfig = {
    testEnvironment: 'node',
    roots: [
        '<rootDir>/src'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([jt]sx?|mjs)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'mjs'
    ],
    coverageDirectory: './tmp/coverage',
};

module.exports = jestConfig;
