import React, {useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, TouchableOpacity, Text, Linking } from 'react-native'
import colors from '../config/colors'

export default function EventListItem() {

  // const navigation = useNavigation();

  const [data, setData] = useState([/*jsonData*/]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appAEVbXaAREzjeRr/events?api_key=keyQSuOk7cheTM4ji')
      .then((response) => response.json())
      .then((json) => {
        setData(json.records)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{marginBottom: 100,}}>
        <View>
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(item.fields.readMore)} >
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
            )}
          />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4D4D4D',
    borderRadius: 3,
    padding: 10,
    marginBottom:20,
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
