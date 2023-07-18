import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { Button, Container, Divider, Text } from 'components';
import { lottie } from 'assets';
import { setAuthenticated, useDispatch } from 'store';

export default function AuthSuccess(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <Container topInset>
      <View style={styles.container}>
        <Lottie
          source={lottie['success-anim']}
          autoPlay
          loop
          style={{
            height: 312,
            width: 312,
          }}
        />
        <Divider />
        <Text variant="bold-700" size={24}>
          Pin creation successful!
        </Text>
        <Button
          label="Done"
          onPress={() => {
            dispatch(setAuthenticated(true));
          }}
        />
      </View>
      <View style={{ flex: 1 }} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'space-evenly',
  },
});
