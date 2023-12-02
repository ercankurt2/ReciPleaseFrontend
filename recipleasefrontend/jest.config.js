module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest'
    },
    automock: false,
    resetMocks: false,
    setupFiles: [
        './jest.setup.js'
    ],
    testMatch: ['<rootDir>/src/components/**/*spec.js']
}
