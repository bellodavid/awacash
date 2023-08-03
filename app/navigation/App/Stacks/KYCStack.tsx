import { createStackNavigator } from '@react-navigation/stack';

import { KYCRoutes } from 'navigation/types';
import AccountSetup from 'screens/App/KYC/AccountSetup';

const { Navigator, Screen, Group } = createStackNavigator<KYCRoutes>();

export default function KYCNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="AccountSetup" component={AccountSetup} />
      </Group>
    </Navigator>
  );
}
