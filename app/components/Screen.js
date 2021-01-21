import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import Constants from 'expo-constants'
import colors from '../config/colors'

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.grey,
  }
})
