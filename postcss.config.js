module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      globalModulePaths: [
        'src/style/config.css',
        'src/style/white.css',
        'src/style/reveal.scss',
        'src/style/style.css',
      ]
    }
  }
};
