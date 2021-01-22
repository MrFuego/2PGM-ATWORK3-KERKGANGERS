import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native'
import { AppText, ChurchList, Screen } from '../components'
import colors from '../config/colors'

export default function Startscreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.box}>
        <ChurchList navigation={navigation} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  box: {
    height: '100%',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  }
})