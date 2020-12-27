import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppLogo, AppText } from '../components';
import colors from '../config/colors'

export default function Welcomescreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AppLogo />
      </TouchableOpacity>
      <View style={styles.block}>
        <AppText style={styles.title}>Welkom</AppText>
        <AppText style={styles.desc}>Klik op het logo om verder te gaan</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desc: {
    color: colors.white,
    fontSize: 18,
    width: 200,
    textAlign: 'center',
  },
  title: {
    color: colors.gold,
    fontWeight: 'bold',
    marginBottom: 20,
  }
})
