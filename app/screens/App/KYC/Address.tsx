import {
  Container,
  Divider,
  Form,
  FormField,
  Header,
  Submit,
  Title,
  VirtualScroll,
} from 'components';
import { KYCRoutes, StackNavigationProps } from 'navigation';

export default function Address({
  navigation,
}: StackNavigationProps<KYCRoutes, 'Address'>): JSX.Element {
  return (
    <>
      <Header />
      <VirtualScroll>
        <Container>
          <Title
            title="Address"
            subtitle="Please enter your address and upload utility bill."
          />
          <Form
            initialValues={{
              address: '',
              city: '',
              country: '',
              utilityBill: '',
            }}
            onSubmit={values => {
              console.log('🚀 ~ file: Address.tsx:19 ~ Address ~ values:', values);
              navigation.navigate('ValidID');
            }}>
            <FormField
              name="address"
              label="Address"
              placeholder="123, Pedro St. Lekki, Lagos"
            />
            <FormField name="city" label="City" />
            <FormField name="country" label="Country" />
            <FormField
              name="utilityBill"
              label="Utility"
              marginBottom={4}
              note="File type accepted include: PDF, PNG, JPEG <100kb size"
              noteVisible
              noteWeight="reg"
              noteColor="text"
            />
            <Divider />
            <Submit label="Continue" />
          </Form>
        </Container>
      </VirtualScroll>
    </>
  );
}
