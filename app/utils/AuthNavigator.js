import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Startscreen, Welcomescreen } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcomescreen} />
    <Stack.Screen name="Start" component={Startscreen} />
  </Stack.Navigator>
)
export default AuthNavigator;