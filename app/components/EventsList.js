import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EventListItem from './EventListItem'

export default function EventsList() {
  return (
    <ScrollView style={styles.height}>
      <View style={styles.container}>
        <EventListItem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
  container: {
    marginBottom: 20,
  },
})
