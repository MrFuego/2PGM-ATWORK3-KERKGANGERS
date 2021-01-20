import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Screen } from '../components'
import { AntDesign } from '@expo/vector-icons';
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Groundmap({ navigation }) {
  return (
    <Screen>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
        <AntDesign name="arrowleft" size={24} color={colors.gold} />
      </TouchableOpacity>
      <View>

      </View>
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
