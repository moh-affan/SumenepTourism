import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SplashScreen } from './screens/Splash';
import { VrExample } from './screens/Home';

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    VrExample: { screen: VrExample },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default () => <AppContainer />;
