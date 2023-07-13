import { Alert, StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { Button, Container, Divider, Text } from 'components';
import { Logo, lottie } from 'assets';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function Welcome({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Welcome'>): JSX.Element {
  return (
    <Container topInset>
      <View style={{ alignItems: 'center' }}>
        <Logo name="logo" size={'40%'} />
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Lottie
            source={lottie['visa-anim']}
            autoPlay
            loop
            style={{
              height: 312,
              width: 312,
            }}
          />
        </View>
        <Text variant="bold-700" size={20} textAlign="center">
          Empowering Financial {'\n'} Independence for African Entrepreneurs!
        </Text>
        <View style={styles.footer}>
          <Button
            label="Open an Account"
            onPress={() => {
              Alert.alert('', 'Already have Awacash account?', [
                {
                  isPreferred: true,
                  onPress() {
                    navigation.navigate('AwacashAccountNo');
                  },
                  style: 'cancel',
                  text: 'Yes',
                },
                {
                  onPress() {
                    navigation.navigate('SignUp');
                  },
                  text: 'No',
                },
              ]);
            }}
          />
          <Divider />
          <Button
            label="Login"
            variant="outline"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
  },
});
