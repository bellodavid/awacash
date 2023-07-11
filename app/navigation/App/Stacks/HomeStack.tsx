import { createStackNavigator } from '@react-navigation/stack';

import { HomeRoutes } from '../../types';

import { TransferMethod } from 'screens';

const { Navigator, Screen, Group } = createStackNavigator<HomeRoutes>();

export default function HomeNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="TransferMethod" component={TransferMethod} />
      </Group>
    </Navigator>
  );
}
