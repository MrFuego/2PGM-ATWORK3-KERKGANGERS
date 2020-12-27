import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { AppText } from '../components'
import colors from '../config/colors'

export default function Churchscreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.visitflanders.com/nl/binaries/024421fd-4d5c-4d79-9f06-ab5d91523e42_tcm14-132143.jpg' }} style={styles.image} />
      <View style={styles.containerInfo}>
        <AppText style={styles.title}>Sint-Baafs</AppText>
        <AppText style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus.</AppText>
        <ScrollView>
          <View style={styles.block}>
            <AppText style={styles.desc}>info en regels over deze kerk</AppText>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
  },
  containerInfo: {
    marginRight: 20,
    marginLeft: 20,
  },
  block: {
    marginBottom: 20,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: colors.white,
  },
  image: {
    width: '100%',
    height: 375,
    borderRadius: 20,
    marginBottom: 15,
  },
})
