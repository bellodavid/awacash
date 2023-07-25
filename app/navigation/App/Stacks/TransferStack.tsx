import { createStackNavigator } from '@react-navigation/stack';

import { TransferRoutes } from '../../types';

import {
  AwacashTransfer,
  AwacashTransferConfirmation,
  AwacashTransferPin,
  BankConfirmation,
  BankPin,
  BankTransfer,
  Beneficiary,
  MyAccountConfirm,
  MyAccountPin,
  MyAccountTransfer,
  TransferMethod,
  TransferSuccess,
} from 'screens/App/Home/Transfer';

const { Navigator, Screen, Group } = createStackNavigator<TransferRoutes>();

export default function TransferNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="TransferMethod" component={TransferMethod} />
        <Screen name="Beneficiary" component={Beneficiary} />
      </Group>
      <Group>
        <Screen name="AwacashTransfer" component={AwacashTransfer} />
        <Screen
          name="AwacashTransferConfirmation"
          component={AwacashTransferConfirmation}
        />
        <Screen name="AwacashTransferPin" component={AwacashTransferPin} />
      </Group>
      <Group>
        <Screen name="MyAccountTransfer" component={MyAccountTransfer} />
        <Screen name="MyAccountConfirm" component={MyAccountConfirm} />
        <Screen name="MyAccountPin" component={MyAccountPin} />
      </Group>
      <Group>
        <Screen name="BankTransfer" component={BankTransfer} />
        <Screen name="BankConfirmation" component={BankConfirmation} />
        <Screen name="BankPin" component={BankPin} />
      </Group>
      <Group>
        <Screen name="TransferSuccess" component={TransferSuccess} />
      </Group>
    </Navigator>
  );
}
