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

export default function SignUp({
  navigation,
}: StackNavigationProps<AuthRoutes, 'SignUp'>): JSX.Element {
  const [showPass, setShowPass] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [_params, setParams] = useState({
    confirmPassword: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const phoneNumberRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  return (
    <Container header>
      <VirtualScroll>
        <Logo name="logo" size="40%" style={{ alignSelf: 'center' }} />
        <Divider />
        <Title title="Personal Details" />
        <Form
          initialValues={{
            confirmPassword: '',
            email: '',
            password: '',
            phoneNumber: '',
          }}
          onSubmit={values => {
            setParams(values);
            console.log(values);
            navigation.navigate('PersonalDetails');
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
          <Submit label="Next" />
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
