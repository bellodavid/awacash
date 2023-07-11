import { StyleSheet, View } from 'react-native';

import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';

export default function Home({
  navigation: _nav,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Home'>): JSX.Element {
  // navigation.navigate('HomeStack', { screen: 'TransferMethod' });

  return (
    <View style={styles.container}>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
