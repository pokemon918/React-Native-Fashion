import React from 'react';
import { screens } from '@constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Welcome } from '@screens';

import type { AuthStackParams } from './AuthStack.types';

const AuthStack = createNativeStackNavigator<AuthStackParams>();
export function AuthStackNavigator() {
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
