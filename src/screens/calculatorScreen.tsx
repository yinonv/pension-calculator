import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import I18n from '../../locales/i18n';
import PensionInfo from '../components/PensionInfo';

import * as Localization from 'expo-localization';

export default function calculatorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t("main.subtitle")}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PensionInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: Localization.isRTL ? 'flex-end' : 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
