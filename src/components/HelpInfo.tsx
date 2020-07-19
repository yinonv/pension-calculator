import React, {useState} from 'react';
import { StyleSheet, Button, Alert} from 'react-native';
import { View } from './Themed';
import I18n from '../../locales/i18n';
import PensionLogic from '../logic/pension.logic';
import Dimensions from '../constants/Layout'
import InputField from './InputField';

export default function HelpInfo() {
  const [salary, setSalary] = useState('');
  const [contribution, setContribution] = useState('');
  const [employerContribution, setEmployerContribution] = useState('');
  const [severance, setSeverance] = useState('');

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
      <InputField 
        onChange={setSalary}
        title={'help.salary'}
        value={salary}
        placeholder={'currency'}
      />
      <InputField 
        onChange={setContribution}
        title={'help.contribution'}
        value={contribution}
        placeholder={'%'}
      />
      <InputField 
        onChange={setEmployerContribution}
        title={'help.employerContribution'}
        value={employerContribution}
        placeholder={'%'}
      />
      <InputField 
        onChange={setSeverance}
        title={'help.severance'}
        value={severance}
        placeholder={'%'}
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
