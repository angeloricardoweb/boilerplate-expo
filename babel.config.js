module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module:react-native-dotenv',
        { moduleName: '@env', allowUndefined: false },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@storage': './src/storage',
            '@constants': './src/constants',
            '@stores': './src/stores',
            '@theme': './src/theme',
            '@types': './src/@types',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
