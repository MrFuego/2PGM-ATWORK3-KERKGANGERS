import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EventListItem from './EventListItem'

export default function EventsList() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <EventListItem date={'01-01-2021'} name={'Lorem Ipsum'} />
        <EventListItem date={'25-01-2021'} name={'Lorem Ipsum'} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
})
