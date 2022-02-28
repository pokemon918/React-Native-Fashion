import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoadAssets } from '@components';
import { fonts } from '@styles';
import { Onboarding } from '@screens';

const AuthStack = createStackNavigator();
function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={Onboarding}
      />
    </AuthStack.Navigator>
  );
}

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthNavigator />
    </LoadAssets>
  );
}
