import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              calculatorScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              helpScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
