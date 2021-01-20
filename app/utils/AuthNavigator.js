import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Churchscreen, Codescannerscreen, Eventscreen, Infoscreen, Startscreen, Welcomescreen, Groundmap } from '../screens';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={Welcomescreen} />
    <Stack.Screen name="Start" component={Startscreen} />
    <Stack.Screen name="Church" component={Churchscreen} />
    <Stack.Screen name="Info" component={Infoscreen} />
    <Stack.Screen name="Event" component={Eventscreen} />
    <Stack.Screen name="Code" component={Codescannerscreen} />
    <Stack.Screen name="Map" component={Groundmap} />
  </Stack.Navigator>
)
export default AuthNavigator;