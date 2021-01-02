import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import colors from '../config/colors'
import AppText from './AppText'

export default function ChurchListItem() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.airtable.com/v0/appAEVbXaAREzjeRr/Table%201?api_key=keyQSuOk7cheTM4ji')
      .then((response) => response.json())
      .then((json) => {
        setData(json.records)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={{marginBottom: 120,}}>
        {isLoading ? <ActivityIndicator/> : (
          <View>
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.card}>
                  <ImageBackground source={{uri: item.fields.foto}} style={styles.image}>
                    <Text style={styles.text}>
                      {item.fields.kerkNaam}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  }, 

  text: {
    opacity: 1,
    color: colors.white,
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 29,
    fontWeight:'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(215, 178, 112, 0.7)',
  },
  image: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 15,
  },
});