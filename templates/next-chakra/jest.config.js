// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!<rootDir>/pages/{_app,_document,_error}.{ts,tsx}',
    '!<rootDir>/next-env.d.ts',
    '!<rootDir>/app/{themes,interfaces}/*.{ts,tsx}',
    '!<rootDir>/{pages,tests}/*',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  modulePaths: ['<rootDir>/app/'],
  moduleNameMapper: {
    '^tests/(.*)': '<rootDir>/tests/$1',
  },
};
