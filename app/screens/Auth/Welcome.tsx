import { StyleSheet, View } from 'react-native';

export default function Welcome(): JSX.Element {
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
