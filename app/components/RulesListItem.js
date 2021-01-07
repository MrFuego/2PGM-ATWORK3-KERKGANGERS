import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

export default function RulesListItem({ subTitle, desc }) {
  return (
    <View style={styles.block}>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
      <AppText style={styles.desc}>{desc}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 20,
  },
  subTitle: {
    color: colors.gold,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 20,
  },
  desc: {
    color: colors.white,
    fontSize: 14,
  },
})
