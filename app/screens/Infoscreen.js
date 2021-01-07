import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { Screen, AppText, AppTitle, RulesList } from '../components'
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Infoscreen({ navigation }) {
  return (
    <Screen>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
        <AntDesign name="arrowleft" size={24} color={colors.gold} />
      </TouchableOpacity>
      <AppTitle title={'Info'} />
      <View style={styles.container}>
        <AppText style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus. Nam egestas nibh vitae lorem maximus, vel tempus nibh ultricies. Vivamus hendrerit ut nunc id vehicula. Nam fringilla tortor eget nisi luctus, eget faucibus tellus cursus. Pellentesque nulla erat, mattis ac arcu id, aliquam elementum augue. Proin semper eu quam in accumsan. Sed et nisl venenatis, aliquam eros et, rhoncus nulla.</AppText>
      </View>
      <AppTitle title={'Regels'} />
      <RulesList />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  button: {
    height: 25,
    width: 25,
    marginBottom: 20,
  },
  desc: {
    color: colors.white,
    fontSize: 14,
  },
})
