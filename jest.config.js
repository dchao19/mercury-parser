const reporters =
  process.env.CI === 'true'
    ? [
        [
          'jest-junit',
          {
            output: './TEST-result.xml',
          },
        ],
      ]
    : ['default'];

module.exports = {
  reporters,
};
