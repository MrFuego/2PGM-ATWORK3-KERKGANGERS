import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AppTitle, EventListItem, Screen } from '../components'
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Eventscreen({ navigation }) {
  return (
    <Screen>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
        <AntDesign name="arrowleft" size={24} color={colors.gold} />
      </TouchableOpacity>
      <AppTitle title={'Evenementen'} />
      <ScrollView>
        <View style={styles.container}>
          <EventListItem date={'01-01-2021'} name={'Lorem Ipsum'} />
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 25,
    width: 25,
    marginBottom: 20,
  },
  container: {
    marginBottom: 20,
  },
})
