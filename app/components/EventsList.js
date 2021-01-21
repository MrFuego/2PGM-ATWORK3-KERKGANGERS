import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Linking, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import EventListItem from './EventListItem'

export default function EventsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appAEVbXaAREzjeRr/events?api_key=keyQSuOk7cheTM4ji')
      .then((response) => response.json())
      .then((json) => {
        setData(json.records)
      })
      .catch((error) => console.error(error))
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <EventListItem
            item={item}
            onPress={() => Linking.openURL(item.fields.readMore)}
          />
        )}
      />
    </View>
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
