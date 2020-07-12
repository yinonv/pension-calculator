import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, Alert} from 'react-native';
import { Text, View } from './Themed';
import I18n from '../../locales/i18n';
import * as Localization from 'expo-localization';
import PensionLogic from '../logic/pension.logic';
import Dimensions from '../constants/Layout'

interface IPensionInfoProps {}

export default function PensionInfo(props: IPensionInfoProps) {
  const [currentAmount, setCurrentAmount] = useState('');
  const [deposit, setDeposit] = useState('');
  const [depositFee, setDepositFee] = useState('');
  const [managementFee, setManagementFee] = useState('');
  const [yieldValue, setYield] = useState('');
  const [years, setYears] = useState('');

  const getLabel = (name: string) => <Text>{I18n.t(`main.${name}`)}</Text>

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
    const {totalAmount, depositFeeTotal, managementFeeTotal} = new PensionLogic().calculatePension({
      currentAmount: Number(currentAmount),
      deposit: Number(deposit),
      depositFee: Number(depositFee),
      managementFee: Number(managementFee),
      yieldValue: Number(yieldValue),
      years: Number(years)
    })
    Alert.alert(`${I18n.t('main.calculatedTotalAmount')}: ${totalAmount}`, 
                `${I18n.t('main.depositFee')}: ${depositFeeTotal}\n${I18n.t('main.managementFee')}: ${managementFeeTotal}`);
  }

  return (
    <View style={styles.container}>
        {getField('currentAmount', setCurrentAmount, currentAmount)}
        {getField('deposit', setDeposit, deposit)}
        {getField('depositFee', setDepositFee, depositFee)}
        {getField('managementFee', setManagementFee, managementFee)}
        {getField('yield', setYield, yieldValue)}
        {getField('years', setYears, years)}
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
