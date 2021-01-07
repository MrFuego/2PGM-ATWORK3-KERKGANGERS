import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

export default function AppTitle({ title }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
})
