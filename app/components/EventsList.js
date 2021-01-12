import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EventListItem from './EventListItem'

export default function EventsList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <EventListItem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
})
