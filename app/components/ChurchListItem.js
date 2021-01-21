import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import colors from '../config/colors';

export default function ChurchListItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <ImageBackground source={{ uri: item.fields.foto }} style={styles.image}>
        <Text style={styles.text}>
          {item.fields.kerkNaam}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  image: {
    width: '100%',
    maxHeight: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  text: {
    opacity: 1,
    color: colors.white,
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(215, 178, 112, 0.55)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
});