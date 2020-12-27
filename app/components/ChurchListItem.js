import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

export default function ChurchListItem({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={{ uri: 'https://www.visitflanders.com/nl/binaries/024421fd-4d5c-4d79-9f06-ab5d91523e42_tcm14-132143.jpg' }} style={styles.image}>
        <AppText style={styles.text}>
          {title}
        </AppText>
      </ImageBackground>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  text: {
    opacity: 1,
    color: colors.white,
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 34,
    textAlign: 'center',
    backgroundColor: 'rgba(215, 178, 112, 0.7)',
  },
  image: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 15,
  },
})