import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Churchscreen, Infoscreen, Startscreen, Welcomescreen } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcomescreen} />
    <Stack.Screen name="Start" component={Startscreen} />
    <Stack.Screen name="Church" component={Churchscreen} />
    <Stack.Screen name="Info" component={Infoscreen} />
  </Stack.Navigator>
)
export default AuthNavigator;