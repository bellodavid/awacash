import { StyleSheet, View } from 'react-native';
// import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';

import { Button, Container, Divider, Text, Title } from 'components';
import { KYCRoutes, StackNavigationProps } from 'navigation';
import { Icon } from 'assets';
import { pallets } from 'constant';

export default function TakeSelfie({
  navigation,
}: StackNavigationProps<KYCRoutes, 'TakeSelfie'>): JSX.Element {
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  return (
    <Container header>
      <Title title="Take a Selfie" />
      <View style={styles.container}>
        <Icon name="user" size={50} color={pallets.primary} />
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
          navigation.navigate('Address');
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
