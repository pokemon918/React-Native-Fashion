import React from 'react';
import { screens } from '@constants';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens';

import type { AuthStackParamList } from './AuthStack.types';

const AuthStack = createStackNavigator<AuthStackParamList>();
export function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name={screens.ONBOARDING}
        component={Onboarding}
      />
    </AuthStack.Navigator>
  );
}
