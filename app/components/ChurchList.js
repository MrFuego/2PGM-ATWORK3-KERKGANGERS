import React, { useState, useEffect } from 'react'
import { StyleSheet, View, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ChurchListItem from './ChurchListItem'
import routes from '../utils/routes';

export default function ChurchList({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appAEVbXaAREzjeRr/kerken?api_key=keyQSuOk7cheTM4ji')
      .then((response) => response.json())
      .then((json) => {
        setData(json.records)
      })
      .catch((error) => console.error(error))
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ChurchListItem
            item={item}
            onPress={() => navigation.navigate(routes.CHURCH, item)}
          />
        )}
      />
    </View>
  )
}