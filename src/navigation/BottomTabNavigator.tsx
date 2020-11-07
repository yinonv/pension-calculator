import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import calculatorScreen from '../screens/calculatorScreen';
import helpScreen from '../screens/helpScreen';
import { BottomTabParamList, calculatorParamList, helpParamList } from '../../types';
import * as Localization from 'expo-localization';
import I18n from '../../locales/i18n';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <React.Fragment>
    <BottomTab.Navigator
      initialRouteName="main"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name={I18n.t(Localization.isRTL ? 'help.tabTitle' : 'main.tabTitle')}
        component={Localization.isRTL ? helpNavigator : mainNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={I18n.t(Localization.isRTL ? 'main.tabTitle' : 'help.tabTitle')}
        component={Localization.isRTL ? mainNavigator : helpNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
    </React.Fragment>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const mainStack = createStackNavigator<calculatorParamList>();

function mainNavigator() {
  return (
    <mainStack.Navigator>
      <mainStack.Screen
        name="calculatorScreen"
        component={calculatorScreen}
        options={{ headerTitle: I18n.t('main.title') }}
      />
    </mainStack.Navigator>
  );
}

const helpStack = createStackNavigator<helpParamList>();

function helpNavigator() {
  return (
    <helpStack.Navigator>
      <helpStack.Screen
        name="helpScreen"
        component={helpScreen}
        options={{ headerTitle: I18n.t('help.title') }}
      />
    </helpStack.Navigator>
  );
}
