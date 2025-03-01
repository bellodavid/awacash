import { createStackNavigator } from '@react-navigation/stack';

import { MoreRoutes } from '../../types';

import {
  BiometricSettings,
  ChangePassword,
  ChangePin,
  LevelOne,
  LevelTwo,
  MoreSuccess,
  RequestChangeOTP,
  Security,
  UpgradeAccount,
  ValidateChangeOTP,
} from 'screens/App/More';

const { Navigator, Screen, Group } = createStackNavigator<MoreRoutes>();

export default function MoreNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="Security" component={Security} />
        <Screen name="RequestChangeOTP" component={RequestChangeOTP} />
        <Screen name="ValidateChangeOTP" component={ValidateChangeOTP} />
        <Screen name="ChangePassword" component={ChangePassword} />
        <Screen name="BiometricSettings" component={BiometricSettings} />
        <Screen name="ChangePin" component={ChangePin} />
      </Group>
      <Group>
        <Screen name="UpgradeAccount" component={UpgradeAccount} />
        <Screen name="LevelOne" component={LevelOne} />
        <Screen name="LevelTwo" component={LevelTwo} />
      </Group>
      <Group>
        <Screen name="MoreSuccess" component={MoreSuccess} />
      </Group>
    </Navigator>
  );
}
