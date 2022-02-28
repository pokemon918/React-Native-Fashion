module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.js',
            '.ios.tsx',
            '.android.js',
            '.android.tsx',
            '.js',
            '.json',
            '.ts',
            '.tsx',
            '.graphql',
          ],
          alias: {
            '@screens': './src/screens',
            '@screens*': './src/screens',
            '@navigation': './src/navigation',
            '@navigation*': './src/navigation*',
            '@components': './src/components',
            '@components*': './src/components*',
            '@styles': './src/styles',
            '@styles*': './src/styles*',
            '@constants': './src/constants',
            '@constants*': './src/constants*',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
