import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function Loading({ name }) {
  return (
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/loading.gif')} />
      <Text style={styles.load}>Loading ...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 125,
    height: 211,
  },
  load: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:25,
  }
})