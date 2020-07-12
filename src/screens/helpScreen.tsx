import * as React from 'react';
import { StyleSheet } from 'react-native';
import I18n from '../../locales/i18n'
import HelpInfo from '../components/HelpInfo';
import { Text, View } from '../components/Themed';
import * as Localization from 'expo-localization';

export default function helpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t('help.subtitle')}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HelpInfo />
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