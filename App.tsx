import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { pallets } from 'constant';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>sheesh!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: pallets.white,
    flex: 1,
    justifyContent: 'center',
  },
});
