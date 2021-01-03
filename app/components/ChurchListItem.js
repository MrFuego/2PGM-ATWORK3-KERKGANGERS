import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
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

import colors from '../config/colors';

export default function ChurchListItem({onPress}) {

  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([/*jsonData*/]);

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
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {navigation.navigate('Church', {name: item.fields.kerkNaam, image: item.fields.foto, shortDescription:item.fields.shortDescription})}} style={styles.card}>
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
    backgroundColor: 'rgba(215, 178, 112, 0.55)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  image: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
});