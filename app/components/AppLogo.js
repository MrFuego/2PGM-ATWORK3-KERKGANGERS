import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default function AppLogo({ name }) {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/logo-white.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 125,
    height: 211,
  }
})
