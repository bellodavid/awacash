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
import { verifyBVNValidationSchema } from 'utils';

export default function VerifyBVN({
  navigation,
}: StackNavigationProps<KYCRoutes, 'VerifyBVN'>): JSX.Element {
  return (
    <Container header>
      <Title title="Verify BVN" subtitle="Please fill this form to verify your BVN." />
      <Form
        validationSchema={verifyBVNValidationSchema}
        initialValues={{
          bvn: '',
          dob: '',
        }}
        onSubmit={value => {
          console.log(value);
          navigation.navigate('KYCSuccess', {
            message: 'Your BVN has been received and would be verified shortly',
          });
        }}>
        <FormField label="BVN" name="bvn" placeholder="Enter BVN" />
        <FormField
          rightIcon="calendar"
          label="Date of Birth"
          name="dob"
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
