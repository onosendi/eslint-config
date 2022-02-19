module.exports = {
  extends: [
    ...['./shared'].map(require.resolve),
  ],
};
