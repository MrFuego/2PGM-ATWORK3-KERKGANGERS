import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import RulesListItem from './RulesListItem'

export default function RulesList() {
  return (
    <ScrollView>
      <RulesListItem subTitle={'Regel 1'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus. Nam egestas nibh vitae lorem maximus, vel tempus nibh ultricies. Vivamus hendrerit ut nunc id vehicula. Nam fringilla tortor eget nisi luctus, eget faucibus tellus cursus. Pellentesque nulla erat, mattis ac arcu id, aliquam elementum augue. Proin semper eu quam in accumsan. Sed et nisl venenatis, aliquam eros et, rhoncus nulla.'} />
      <RulesListItem subTitle={'Regel 2'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus. Nam egestas nibh vitae lorem maximus, vel tempus nibh ultricies. Vivamus hendrerit ut nunc id vehicula. Nam fringilla tortor eget nisi luctus, eget faucibus tellus cursus. Pellentesque nulla erat, mattis ac arcu id, aliquam elementum augue. Proin semper eu quam in accumsan. Sed et nisl venenatis, aliquam eros et, rhoncus nulla.'} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})
