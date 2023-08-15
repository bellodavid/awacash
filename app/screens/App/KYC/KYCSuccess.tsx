import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

const { fonts } = layout;
import { Button, Container, Text, VirtualScroll } from 'components';
import { lottie } from 'assets';
import { KYCRoutes, StackNavigationProps } from 'navigation';
import { layout } from 'constant';

export type KYCRoutesParamList = {
  [key in keyof KYCRoutes['KYCSuccess']]: undefined;
};

export default function KYCSuccess({
  route,
}: StackNavigationProps<KYCRoutes, 'KYCSuccess'>): JSX.Element {
  const { params } = route;

  return (
    <VirtualScroll>
      <Container>
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Lottie
              source={lottie['success-anim']}
              autoPlay
              loop
              style={{
                height: 200,
                width: 200,
              }}
            />
          </View>
          <View>
            <Text variant="bold-700" size={fonts.body}>
              {params.message}{' '}
            </Text>
          </View>
          <Button label="Done" />
        </View>
      </Container>
    </VirtualScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
