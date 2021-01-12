import React, {useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { Screen, AppText, Loading } from '../components'
import colors from '../config/colors'
import routes from '../utils/routes';
import { useData } from '../hooks/useData';

export default function Infoscreen({ navigation, route }) {

  const [churchData, setChurchData] = useState(null)

  const {id} = route.params;

  const {state:{data, error}, refetch} = useData()

  useEffect(() => {
    if (data) {
      const record = data.filter(({id:recordId}) => recordId === id)
      setChurchData(record[0])
    }
  }, [data])

  useEffect(() => {
    console.log(churchData)
  },[churchData])

  if (!churchData) return <View style={styles.load}>
     <Loading/>
    </View>
  else return (
    <Screen>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
        <AntDesign name="arrowleft" size={24} color={colors.gold} />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          <AppText style={styles.title}>Info</AppText>
          <AppText style={styles.desc}>{churchData.fields.info}</AppText>
        </View>
        <View style={styles.container}>
          <AppText style={styles.title}>Regels</AppText>
          <View style={styles.block}>
            <AppText style={styles.subTitle}>Regel 1</AppText>
            <AppText style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus. Nam egestas nibh vitae lorem maximus, vel tempus nibh ultricies. Vivamus hendrerit ut nunc id vehicula. Nam fringilla tortor eget nisi luctus, eget faucibus tellus cursus. Pellentesque nulla erat, mattis ac arcu id, aliquam elementum augue. Proin semper eu quam in accumsan. Sed et nisl venenatis, aliquam eros et, rhoncus nulla.</AppText>
          </View>
          <View style={styles.block}>
            <AppText style={styles.subTitle}>Regel 2</AppText>
            <AppText style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh felis, auctor et tempus eu, luctus eget lacus. Nam egestas nibh vitae lorem maximus, vel tempus nibh ultricies. Vivamus hendrerit ut nunc id vehicula. Nam fringilla tortor eget nisi luctus, eget faucibus tellus cursus. Pellentesque nulla erat, mattis ac arcu id, aliquam elementum augue. Proin semper eu quam in accumsan. Sed et nisl venenatis, aliquam eros et, rhoncus nulla.</AppText>
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
  load:{
    color:colors.gold,
    backgroundColor: colors.grey,
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
    flex:1,

  }
})