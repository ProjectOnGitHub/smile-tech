const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['ie >= 8', 'last 20 version'],
    }),
    cssnano({ preset: 'default' }),
  ],
};
