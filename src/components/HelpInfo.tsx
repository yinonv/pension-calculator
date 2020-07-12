import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, Alert} from 'react-native';
import { Text, View } from './Themed';
import I18n from '../../locales/i18n';
import * as Localization from 'expo-localization';
import PensionLogic from '../logic/pension.logic';
import Dimensions from '../constants/Layout'
import PensionInfo from './PensionInfo';

export default function HelpInfo() {
  const [salary, setSalary] = useState('');
  const [contribution, setContribution] = useState('');
  const [employerContribution, setEmployerContribution] = useState('');
  const [severance, setSeverance] = useState('');


  const getLabel = (name: string) => <Text>{I18n.t(`help.${name}`)}</Text>

  const getField = (name: string, onChange: any, value: string) => (
    <View style={styles.inputContainer}>
      {!Localization.isRTL && getLabel(name)}
        <TextInput
          style={styles.input}
          keyboardType = 'numeric'
          onChangeText={input => onChange(input)}
          value={value}
          />
      {Localization.isRTL && getLabel(name)}
    </View>
  )

  const onButtonClick = () => {
      let monthlyDeposit = new PensionLogic().calculateMonthlyDeposit({
          salary: Number(salary),
          contribution: Number(contribution),
          employerContribution: Number(employerContribution),
          severance: Number(severance)
    })
        Alert.alert(`${I18n.t('main.deposit')}: ${monthlyDeposit}`);
  }

  return (
    <View style={styles.container}>
        {getField('salary', setSalary, salary)}
        {getField('contribution', setContribution, contribution)}
        {getField('employerContribution', setEmployerContribution, employerContribution)}
        {getField('severance', setSeverance, severance)}
      <View style={styles.button}>
        <Button
        title={I18n.t('main.button')}
        onPress={onButtonClick}
        />
      </View>
    </View>
  );
}

const {width} = Dimensions.window;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
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
    marginRight: 15,
    marginLeft: 15,
    width: 150
  },
  button: {
    width,
    alignItems: 'center',
  }
});
