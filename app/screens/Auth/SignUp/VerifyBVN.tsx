import { Alert } from 'react-native';

import {
  ActionText,
  Container,
  Divider,
  Form,
  FormField,
  Submit,
  Title,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function VerifyBVN({
  navigation,
}: StackNavigationProps<AuthRoutes, 'VerifyBVN'>): JSX.Element {
  return (
    <Container header>
      <Title title="Verify BVN" subtitle="Please fill this form to verify your BVN." />
      <Form
        initialValues={{
          bvn: '',
        }}
        onSubmit={val => {
          console.log(val);
          Alert.alert('', 'Receive OTP for BVN verification?', [
            {
              isPreferred: true,
              onPress() {
                navigation.navigate('ValidateBVN');
              },
              style: 'cancel',
              text: 'Email',
            },
            {
              onPress() {
                navigation.navigate('ValidateBVN');
              },
              text: 'Phone number',
            },
          ]);
        }}>
        <FormField label="BVN" name="bvn" placeholder="Enter BVN" />
        <Divider />
        <Submit label="Verify" />
        <Divider />
        <ActionText action="Contact support" question="Unable to validate BVN?" />
      </Form>
    </Container>
  );
}
