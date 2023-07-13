import { Container, Form, FormField, Submit, Title } from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function AwacashAccountNo({
  navigation,
}: StackNavigationProps<AuthRoutes, 'AwacashAccountNo'>): JSX.Element {
  return (
    <>
      <Container header>
        <Title
          title="Account Number"
          subtitle="Please enter your Awacash account number"
        />
        <Form
          initialValues={{ accountNumber: '' }}
          onSubmit={val => {
            console.log(val);
            navigation.navigate('AwacashValidateOTP');
          }}>
          <FormField
            name="accountNumber"
            label="Account Number"
            placeholder="Enter Account Number"
            maxLength={10}
            keyboardType="number-pad"
            returnKeyLabel="Next"
            returnKeyType="next"
          />
          <Submit label="Continue" />
        </Form>
      </Container>
    </>
  );
}
