import { ActionText, Container, Divider, Form, FormPin, Submit, Title } from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';
import { useVerifyPhoneMutation } from 'service';
import { layout } from 'constant';
import { otpValidationSchema } from 'utils';

const { spacing } = layout;

export default function ValidateOTP({
  navigation,
  route,
}: StackNavigationProps<AuthRoutes, 'ValidateOTP'>): JSX.Element {
  const { params } = route;
  console.log('🚀 ~ file: ValidateOTP.tsx:14 ~ params:', params);
  const [verifyOtp, { isLoading }] = useVerifyPhoneMutation();

  const verify = async ({
    code,
    phoneNumber,
    tokenId,
  }: {
    code: string;
    phoneNumber: string;
    tokenId: string;
  }) => {
    const result = await verifyOtp({ code, phoneNumber, tokenId });

    if ('error' in result) {
      console.log(result.error);
    } else {
      navigation.navigate('PersonalDetails');
    }
  };

  return (
    <Container header>
      <Title
        title="Validate OTP"
        subtitle={`Enter the OTP sent sent to ${params.data.phoneNumber}`}
      />
      <Form
        validationSchema={otpValidationSchema}
        initialValues={{ otp: '' }}
        onSubmit={value => {
          console.log(value);
          verify({
            code: value.otp,
            phoneNumber: params?.data?.phoneNumber,
            tokenId: params?.tokenId,
          });
        }}>
        <FormPin name="otp" cellCount={6} />
        <Divider />
        <Submit {...{ isLoading }} label="Continue" marginBottom={spacing.m} />
        <ActionText action="Resend Code" question="I didn't receive code?" />
      </Form>
    </Container>
  );
}
