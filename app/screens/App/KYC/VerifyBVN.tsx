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
import { KYCRoutes, StackNavigationProps } from 'navigation';
const message = 'I am here';
export default function VerifyBVN({
  navigation,
}: StackNavigationProps<KYCRoutes, 'VerifyBVN'>): JSX.Element {
  return (
    <Container header>
      <Title title="Verify BVN" subtitle="Please fill this form to verify your BVN." />
      <Form
        initialValues={{
          bvn: '',
        }}
        onSubmit={value => {
          console.log(value);
          navigation.navigate('KYCSuccess', { message });
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
        <FormField
          rightIcon="calendar"
          label="Date of Birth"
          name="date"
          placeholder="dd/mm/yyyy"
        />
        <Divider />
        <Submit label="Verify" />
        <Divider />
        <ActionText action="Contact support" question="Unable to validate BVN?" />
      </Form>
    </Container>
  );
}
