import { ActionText, Container, Divider, Form, FormPin, Submit, Title } from 'components';
import { layout } from 'constant';
import { KYCRoutes, StackNavigationProps } from 'navigation';

const { spacing } = layout;

export default function ValidateBVN({
  navigation,
}: StackNavigationProps<KYCRoutes, 'ValidateBVN'>): JSX.Element {
  return (
    <Container header>
      <Title
        title="Validate BVN"
        subtitle="Enter the OTP sent sent to silv********@gmail.com"
      />
      <Form
        initialValues={{ otp: '' }}
        onSubmit={value => {
          console.log(value);
          navigation.navigate('Address');
        }}>
        <FormPin name="otp" cellCount={6} />
        <Divider />
        <Submit label="Continue" marginBottom={spacing.m} />
        <ActionText action="Resend Code" question="I didn't receive code?" />
      </Form>
    </Container>
  );
}
