import { createStackNavigator } from '@react-navigation/stack';

import {
  AccountSetup,
  Address,
  CaptureDoc,
  TakeSelfie,
  VerifyBVN,
} from 'screens/App/KYC';
import { KYCRoutes } from 'navigation/types';

const { Navigator, Screen, Group } = createStackNavigator<KYCRoutes>();

export default function KYCSack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="AccountSetup" component={AccountSetup} />
      </Group>
      <Group>
        <Screen name="VerifyBVN" component={VerifyBVN} />
        <Screen name="TakeSelfie" component={TakeSelfie} />
        <Screen name="CaptureDoc" component={CaptureDoc} />
        <Screen name="Address" component={Address} />
      </Group>
    </Navigator>
  );
}
