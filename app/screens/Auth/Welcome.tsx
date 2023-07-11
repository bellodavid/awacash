import { StyleSheet, View } from 'react-native';

import { Text } from 'components';

export default function Welcome(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
