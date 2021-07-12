module.exports = {
    verbose: true,
    clearMocks: true,
    collectCoverage: false,
    setupFilesAfterEnv: ['./src/setupTest.js'],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    }
}