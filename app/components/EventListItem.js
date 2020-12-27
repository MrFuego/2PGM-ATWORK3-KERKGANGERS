import React from 'react'
import { StyleSheet, View } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

export default function EventListItem({ date, name }) {
  return (
    <View style={styles.block}>
      <AppText style={styles.date}>{date}</AppText>
      <AppText style={styles.event}>{name}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.gold,
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  date: {
    color: colors.white,
    fontSize: 14,
  },
  event: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.grey,
    marginTop: 10,
  },
})
