import { createStackNavigator } from '@react-navigation/stack';

import { HomeRoutes } from '../../types';

import TransferStack from './TransferStack';

const { Navigator, Screen, Group } = createStackNavigator<HomeRoutes>();

export default function HomeNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="Transfer" component={TransferStack} />
      </Group>
    </Navigator>
  );
}
