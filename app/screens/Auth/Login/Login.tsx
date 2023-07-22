import { StyleSheet, TextInput, View } from 'react-native';
import { useRef } from 'react';

import {
  ActionText,
  Container,
  Divider,
  Form,
  FormCheck,
  FormField,
  Submit,
  Text,
  Title,
} from 'components';
import {
  setAuthenticated,
  setEmail,
  setRememberMe,
  useDispatch,
  useSelector,
} from 'store';
import { layout } from 'constant';
import { AuthRoutes, StackNavigationProps } from 'navigation';

const { fonts } = layout;

export default function Login({
  navigation,
}: StackNavigationProps<AuthRoutes, 'Login'>): JSX.Element {
  const { email, rememberMe } = useSelector(state => state.persisted);

  const passwordRef = useRef<TextInput>(null);
  const dispatch = useDispatch();

  return (
    <Container header>
      <Title title="Login" />
      <Form
        initialValues={{
          email: email,
          password: '',
          remember: rememberMe,
        }}
        onSubmit={values => {
          dispatch(setEmail(values.email));
          dispatch(setRememberMe(values.remember));
          dispatch(setAuthenticated(true));
        }}>
        <FormField
          name="email"
          label="Email"
          symbol="@"
          icon="message"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <FormField
          ref={passwordRef}
          name="password"
          label="Password"
          icon="lock"
          secureTextEntry
        />
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <FormCheck name="remember" label="Keep me signed in" />
          <Text
            textTransform="capitalize"
            size={fonts.subhead}
            variant="bold-700"
            onPress={() => {
              navigation.navigate('RequestResetOTP');
            }}>
            Forgot Password?
          </Text>
        </View>
        <Divider space="xxl" />
        <Submit label="Login" />
        <Divider />
        <ActionText
          action="Sign In"
          question="Don't have an account?"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Divider />
      </Form>
      <View style={styles.container}>
        <View />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
