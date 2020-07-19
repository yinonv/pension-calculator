import React, {useState} from 'react';
import { StyleSheet, Button, Alert} from 'react-native';
import { View } from './Themed';
import I18n from '../../locales/i18n';
import PensionLogic from '../logic/pension.logic';
import Dimensions from '../constants/Layout';
import InputField from './InputField';

interface IPensionInfoProps {}

export default function PensionInfo(props: IPensionInfoProps) {
  const [currentAmount, setCurrentAmount] = useState('');
  const [deposit, setDeposit] = useState('');
  const [depositFee, setDepositFee] = useState('');
  const [managementFee, setManagementFee] = useState('');
  const [yieldValue, setYield] = useState('');
  const [years, setYears] = useState('');

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
      <InputField 
        onChange={setCurrentAmount}
        title={'main.currentAmount'}
        value={currentAmount}
        placeholder={'currency'}
      />
      <InputField 
        onChange={setDeposit}
        title={'main.deposit'}
        value={deposit}
        placeholder={'currency'}
      />
      <InputField 
        onChange={setDepositFee}
        title={'main.depositFee'}
        value={depositFee}
        placeholder={'%'}
      />
      <InputField 
        onChange={setManagementFee}
        title={'main.managementFee'}
        value={managementFee}
        placeholder={'%'}
      />
      <InputField 
        onChange={setYield}
        title={'main.yield'}
        value={yieldValue}
        placeholder={'%'}
      />
      <InputField 
        onChange={setYears}
        title={'main.years'}
        value={years}
        placeholder={''}
      />
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
    alignItems: 'center',
  },
  button: {
    width,
    alignItems: 'center',
  }
});
