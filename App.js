import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcomescreen from './app/screens/Welcomescreen';
import colors from './app/config/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Welcomescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})