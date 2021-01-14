import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native'
import { AppText, ChurchList, Screen } from '../components'
import colors from '../config/colors'

export default function Startscreen() {
  return (
    <Screen>
      <AppText style={styles.title}>Kies uw kerk</AppText>
      <ChurchList />
    </Screen>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  }
})