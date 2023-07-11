import { createStackNavigator } from '@react-navigation/stack';

import { AppRoutes } from '../types';

import Tab from './Tab';
import HomeNavigator from './Stacks/HomeStack';

const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="TabStack" component={Tab} />
        <Screen name="HomeStack" component={HomeNavigator} />
      </Group>
    </Navigator>
  );
}
