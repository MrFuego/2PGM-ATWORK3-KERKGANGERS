import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AppText } from '../components'
import { AntDesign, Entypo } from '@expo/vector-icons';
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Churchscreen({ navigation, route }) {

  const { name, image, shortDescription, id  } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.START)}>
          <AntDesign name="close" size={24} color={colors.gold} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri:(image) }} style={styles.image} />
      <View style={styles.containerInfo}>
        <AppText style={styles.title}>{(name)}</AppText>
        <AppText style={styles.desc}>{(shortDescription)}</AppText>
      </View>
      <ScrollView style={styles.links}>
        <View style={styles.containerLinks}>
          <TouchableOpacity style={styles.block} onPress={() => navigation.navigate(routes.INFO, {id:id})}>
            <AntDesign name="infocirlce" size={34} color={colors.gold} />
            <AppText style={styles.info}>Info en regels over deze kerk</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block} onPress={() => navigation.navigate(routes.CODE)}>
            <Entypo name="camera" size={34} color={colors.gold} />
            <AppText style={styles.info}>QR code scanner</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block}>
            <Entypo name="map" size={34} color={colors.gold} />
            <AppText style={styles.info}>Grondplan van deze kerk</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block} onPress={() => navigation.navigate(routes.EVENT, {id:id})} >
            <Entypo name="calendar" size={34} color={colors.gold} />
            <AppText style={styles.info}>Evenementen</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    flex: 1,
    position: 'relative',
  },
  containerInfo: {
    marginRight: 20,
    marginLeft: 20,
  },
  containerLinks: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  button: {
    height: 25,
    width: 25,
    marginTop: 50,
    marginBottom: 20,
  },
  block: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  links: {
    backgroundColor: colors.lightgrey,
    marginTop: 30,
    height: 'auto',
    borderRadius: 20,
    padding: 10,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    marginTop: 30,
    color: colors.white,
  },
  info: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 140,
    color: colors.white,
    marginLeft: 30,
  },
  image: {
    width: '100%',
    height: 375,
    borderRadius: 20,
    marginBottom: 15,
  },
})
