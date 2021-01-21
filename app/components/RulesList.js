import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import RulesListItem from './RulesListItem'

export default function RulesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appAEVbXaAREzjeRr/rules?api_key=keybeKoDob9FKy4GK')
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
          <RulesListItem
            subTitle={item.fields.RuleNr}
            desc={item.fields.Rule}
          />
        )}
      />
    </View>
  )
}
