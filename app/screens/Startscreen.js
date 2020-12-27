import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppText, ChurchListItem, Screen } from '../components'
import colors from '../config/colors'

export default function Startscreen() {
  return (
    <Screen>
      <AppText style={styles.title}>Kies uw kerk</AppText>
      <ChurchListItem title="Sint-Pieterskerk" />
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    marginTop: 10,
  }
})
