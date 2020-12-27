import React from 'react'
import { StyleSheet } from 'react-native'
import { AppText, ChurchListItem, Screen } from '../components'
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Startscreen({ navigation }) {
  return (
    <Screen>
      <AppText style={styles.title}>Kies uw kerk</AppText>
      <ChurchListItem title="Sint-Baafs" onPress={() => navigation.navigate(routes.CHURCH)} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    marginTop: 10,
  }
})
