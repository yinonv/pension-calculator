import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Text, View} from './src/components/Themed'
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { Button, StyleSheet } from 'react-native';
import I18n from './locales/i18n';
import * as Localization from 'expo-localization';

export default function App() {
  
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <React.Fragment>
        <View style={styles.languageContainer}>
        <Button
          style={styles.languageButton}
          title={Localization.isRTL ? 'EN' : 'HE'}
          onPress={() => null}
        />
        </View>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  languageContainer: {
    justifyContent: "center",
    width: 50,
    height: 100,
  },
  languageButton: {
    borderRadius: 50
  }
});