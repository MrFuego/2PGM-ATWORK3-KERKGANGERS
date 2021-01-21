import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'
import colors from '../config/colors'
import routes from '../utils/routes';

export default function Codescannerscreen({ navigation }) {
  const [permission, setPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const handleScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (permission === null) {
    return <SafeAreaView>
      <View style={styles.access}>
        <Text>Gelieve toegang te geven tot camera</Text>
      </View>
    </SafeAreaView>;
  }
  if (permission === false) {
    return <SafeAreaView>
      <View style={styles.access}>
        <Text>Geen toegang tot camera</Text>
      </View>
    </SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.CHURCH)}>
          <AntDesign name="arrowleft" size={24} color={colors.gold} />
        </TouchableOpacity>
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleScanned}
          />
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  access: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    marginRight: 20,
    marginLeft: 20,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  button: {
    height: 25,
    width: 25,
    marginBottom: 20,
  },
  desc: {
    color: colors.white,
    fontSize: 14,
  },
})