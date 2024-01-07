module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            screens: './src/screens',
            constants: './src/constants',
            components: './src/components',
            services: './src/services',
            theme: './src/theme',
            assets: './src/assets',
            hooks: './src/hooks',
            navigation: './src/navigation',
          },
        },
      ],
      '@babel/plugin-transform-flow-strip-types',
      ['@babel/plugin-proposal-private-methods', { loose: true }],
    ],
  };
};
