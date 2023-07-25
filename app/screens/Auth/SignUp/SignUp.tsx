import { StyleSheet, TextInput, View } from 'react-native';
import { useRef, useState } from 'react';

import {
  Container,
  Divider,
  Form,
  FormField,
  Submit,
  Title,
  VirtualScroll,
} from 'components';
import { Logo } from 'assets';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { signUpValidationSchema } from 'utils';
import { useSendPhoneVerificationMutation } from 'service';

export default function SignUp({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SignUp'>): JSX.Element {
  const [send, { isLoading }] = useSendPhoneVerificationMutation();

  const [showPass, setShowPass] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);

  const [params, setParams] = useState({
    confirmPassword: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const phoneNumberRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const sendOTP = async ({ phoneNumber }: { phoneNumber: string }) => {
    const result = await send({ phoneNumber });
    if ('error' in result) {
      console.log(result.error);
    } else {
      console.log('params', params);
      navigation.navigate('ValidateOTP', { data: params, tokenId: result.data.data });
    }
  };

  return (
    <Container header>
      <VirtualScroll>
        <Logo name="logo" size="40%" style={{ alignSelf: 'center' }} />
        <Divider />
        <Title title="Personal Details" />
        <Form
          validationSchema={signUpValidationSchema}
          initialValues={{
            confirmPassword: '',
            email: '',
            password: '',
            phoneNumber: '',
          }}
          onSubmit={values => {
            setParams(values);
            sendOTP({ phoneNumber: values.phoneNumber });
          }}>
          <FormField
            label="Email"
            name="email"
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => phoneNumberRef.current?.focus()}
          />
          <FormField
            ref={phoneNumberRef}
            label="Phone Number"
            keyboardType="number-pad"
            name="phoneNumber"
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <FormField
            ref={passwordRef}
            label="Password"
            name="password"
            secureTextEntry={showPass}
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            rightIcon={showPass ? 'eye' : 'eye-slash'}
            onRightIconPress={() => setShowPass(i => !i)}
          />
          <FormField
            ref={confirmPasswordRef}
            label="Confirm Password"
            name="confirmPassword"
            secureTextEntry={showConfirm}
            returnKeyLabel="Done"
            returnKeyType="done"
            rightIcon={showConfirm ? 'eye' : 'eye-slash'}
            onRightIconPress={() => setShowConfirm(i => !i)}
          />
          <Divider space="xl" />
          <Submit {...{ isLoading }} label="Next" />
          <Divider space="s" />
        </Form>
        <View style={styles.container}>
          <View />
        </View>
      </VirtualScroll>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//adeola@mailinator.com
