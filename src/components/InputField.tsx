import React from 'react';
import { StyleSheet, TextInput} from 'react-native';
import { View, Text } from './Themed';
import Dimensions from '../constants/Layout'
import * as Localization from 'expo-localization';
import I18n from '../../locales/i18n';

interface IInputFieldProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  value: string;
  placeholder: string;
}

export default function InputField(props: IInputFieldProps) {

  const getLabel = (name: string) => <Text>{I18n.t(name)}</Text>

  return (
    <View style={styles.inputContainer}>
      {!Localization.isRTL && getLabel(props.title)}
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          onChangeText={input => props.onChange(input)}
          value={props.value}
          placeholder={I18n.t(props.placeholder, {defaultValue: props.placeholder})}
          />
      {Localization.isRTL && getLabel(props.title)}
    </View>
  );
}

const {width} = Dimensions.window;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15,
    justifyContent: "space-between",
    width: width - 30
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    textAlign: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    width: 130
  }
});
