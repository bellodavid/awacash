import { TouchableOpacity, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect } from 'react';

import { Icon } from 'assets';
import { pallets } from 'constant';
import { useSelector } from 'store';

const checkBiometricsSupported = async () => {
  const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

  console.log(types);
  console.log(types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION));

  if (types?.length) {
    const supported =
      types.includes(LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION) ||
      types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT) ||
      types.includes(LocalAuthentication.AuthenticationType.IRIS);

    console.log(supported);
  }
};

export default function Biometric(): JSX.Element | null {
  const { biometric } = useSelector(state => state.persisted);

  useEffect(() => {
    checkBiometricsSupported();
  }, []);

  if (biometric || 5 + 5 === 10) {
    return null;
  }

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity activeOpacity={0.6}>
        <Icon color={pallets.primary} name="biometric-ios-facescan" size={60} />
      </TouchableOpacity>
    </View>
  );
}
