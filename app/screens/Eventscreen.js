import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppTitle, EventsList, Screen } from '../components'
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Eventscreen({ navigation }) {
  return (
    <Screen>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
        <AntDesign name="arrowleft" size={24} color={colors.gold} />
      </TouchableOpacity>
      <AppTitle title='Evenementen' />
      <EventsList navigation={navigation} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 25,
    width: 25,
    marginBottom: 20,
  },
})
