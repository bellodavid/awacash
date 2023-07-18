import { StyleSheet, View } from 'react-native';

import { Button, Container, Divider, Text, Title } from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { Icon } from 'assets';
import { pallets } from 'constant';

export default function CaptureDoc({
  navigation,
}: StackNavigationProps<AuthRoutes, 'CaptureDoc'>): JSX.Element {
  return (
    <Container header>
      <Title title="Take a Picture of your Document" />
      <View style={styles.container}>
        <Icon name="camera" size={50} color={pallets.primary} />
      </View>
      <Divider />
      <Text
        color={pallets.primary}
        style={{ alignSelf: 'center', textDecorationLine: 'underline' }}>
        Retake Photo
      </Text>
      <Divider />
      <Button
        label="Continue"
        onPress={() => {
          navigation.navigate('TakeSelfie');
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: pallets.primary,
    borderRadius: 12,
    borderStyle: 'dashed',
    borderWidth: 1,
    height: 255,
    justifyContent: 'center',
  },
});
