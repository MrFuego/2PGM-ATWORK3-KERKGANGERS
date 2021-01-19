import React from 'react';
import { StyleSheet, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { Screen, AppText, } from '../components'
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Infoscreen({ navigation, route }) {
  const params = route.params;

  return (
    <Screen>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
        <AntDesign name="arrowleft" size={24} color={colors.gold} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <AppText style={styles.title}>Info</AppText>
          <AppText style={styles.desc}>{params.fields.info}</AppText>
        </View>
        <View style={styles.container}>
          <AppText style={styles.title}>Regels</AppText>
          <View style={styles.block}>
            <AppText style={styles.subTitle}>Regel 1</AppText>
            <AppText style={styles.desc}>{params.fields.rules}</AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  button: {
    height: 25,
    width: 25,
    marginBottom: 20,
  },
  block: {
    marginBottom: 20,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    color: colors.gold,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 20,
  },
  desc: {
    color: colors.white,
    fontSize: 14,
  },
  load: {
    color: colors.gold,
    backgroundColor: colors.grey,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})