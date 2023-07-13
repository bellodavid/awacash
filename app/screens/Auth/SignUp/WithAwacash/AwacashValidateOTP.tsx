import { ActionText, Container, Divider, Form, FormPin, Submit, Title } from 'components';
import { layout } from 'constant';

const { spacing } = layout;

export default function AwacashValidateOTP(): JSX.Element {
  return (
    <Container header>
      <Title
        title={`Validate Account ${'\n'}Number`}
        subtitle="Enter the OTP sent sent to 090******13"
      />
      <Form
        initialValues={{ otp: '' }}
        onSubmit={val => {
          console.log(val);
        }}>
        <FormPin name="otp" cellCount={6} />
        <Divider />
        <Submit label="Continue" marginBottom={spacing.m} />
        <ActionText action="Resend Code" question="I didn't receive code?" />
      </Form>
    </Container>
  );
}
