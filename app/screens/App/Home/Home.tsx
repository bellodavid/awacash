import { StyleSheet, View } from 'react-native';

import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';
import { Button, Container } from 'components';
import { useTheme } from 'hooks';

export default function Home({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Home'>): JSX.Element {
  const { color } = useTheme();

  return (
    <Container>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color.border,
          },
        ]}
      />
      <Button
        label="navigate"
        onPress={() => {
          navigation.navigate('MoreStack', { screen: 'BiometricSettings' });
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
