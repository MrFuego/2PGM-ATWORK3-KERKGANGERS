import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import colors from '../config/colors'

export default function EventListItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} >
      <Text style={styles.event}>
        {item.fields.eventName}
      </Text>
      <Text style={styles.date}>
        {item.fields.date}
      </Text>
      <Text style={styles.more}>
        meer info
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4D4D4D',
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
    borderStyle: 'solid',
    borderColor: colors.gold,
    borderWidth: 2,
  },

  event: {
    color: colors.white,
    fontSize: 20,
    marginBottom: 7,
    fontWeight: 'bold',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },

  date: {
    color: colors.gold,
  },

  more: {
    fontWeight: 'bold',
    color: "#fff",
    marginTop: 7,
    fontSize: 17,
  }
})
