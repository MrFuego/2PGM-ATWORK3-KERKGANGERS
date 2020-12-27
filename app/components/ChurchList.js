import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import ChurchListItem from './ChurchListItem'
import routes from '../utils/routes';

export default function ChurchList({ navigation }) {
  return (
    <ScrollView>
      <ChurchListItem title="Sint-Baafs" onPress={() => navigation.navigate(routes.CHURCH)} />
    </ScrollView>
  )
}
