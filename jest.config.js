module.exports = {
    // ???
    preset: 'ts-jest',
    moduleFileExtensions: ['js', 'vue', 'json', 'ts'],
    rootDir: 'src',
    testRegex: '.spec.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    coverageDirectory: '<rootDir>/../.pages/cov',
    testEnvironment: 'node',
    coverageReporters: ['json-summary', 'html'],
    moduleNameMapper: {
        '^~/(.+)': '<rootDir>/$1',
        '^@/(.+)': '<rootDir>/../$1',
    },
}
