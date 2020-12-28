import React from 'react'
import { StyleSheet, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ChurchListItem from './ChurchListItem'
import routes from '../utils/routes';

export default function ChurchList({ navigation }) {
  return (
    <ScrollView style={styles.height}>
      <ChurchListItem title="Sint-Baafs" onPress={() => navigation.navigate(routes.CHURCH)} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  height: {
    height: '100%',
  },
})