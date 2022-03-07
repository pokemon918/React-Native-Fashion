import React from 'react';
import { screens } from '@constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackNavigator } from '../AuthStack/AuthStack';
import { HomeTabsNavigator } from '../HomeTabs/HomeTabs';

import type { RootStackParams } from './Root.types';

const RootStack = createNativeStackNavigator<RootStackParams>();
export function RootNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={screens.AUTH}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen
        name={screens.AUTH}
        component={AuthStackNavigator}
      />
      <RootStack.Screen
        name={screens.HOME}
        component={HomeTabsNavigator}
      />
    </RootStack.Navigator>
  );
}
