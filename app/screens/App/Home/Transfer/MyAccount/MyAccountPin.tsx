import { StyleSheet, View } from 'react-native';

import { Container } from 'components';
// import {} from 'navigation';

export default function MyAccountPin(): JSX.Element {
  return (
    <Container>
      <View style={styles.container} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
