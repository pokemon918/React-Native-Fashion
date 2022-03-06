import React from 'react';
import { screens } from '@constants';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, Welcome } from '@screens';

import type { AuthStackParamList } from './AuthStack.types';

const AuthStack = createStackNavigator<AuthStackParamList>();
export function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={screens.ONBOARDING}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen
        name={screens.ONBOARDING}
        component={Onboarding}
      />
      <AuthStack.Screen name={screens.WELCOME} component={Welcome} />
    </AuthStack.Navigator>
  );
}
