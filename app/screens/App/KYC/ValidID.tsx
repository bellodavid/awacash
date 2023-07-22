import {
  Container,
  Divider,
  Form,
  FormDocPicker,
  FormPicker,
  Submit,
  Title,
} from 'components';
import { KYCRoutes, StackNavigationProps } from 'navigation';

export default function ValidID({
  navigation,
}: StackNavigationProps<KYCRoutes, 'ValidID'>): JSX.Element {
  return (
    <Container header>
      <>
        <Title title="Valid ID" subtitle="Select and upload a valid Id" />
        <Form
          initialValues={{
            id: undefined as unknown as PickerItemProps,
            type: undefined as unknown as PickerItemProps,
          }}
          onSubmit={values => {
            console.log('🚀 ~ file: ValidID.tsx:14 ~ ValidID ~ values:', values);
            navigation.navigate('CaptureDoc');
          }}>
          <FormPicker
            name="type"
            label="Valid ID"
            placeholder="Select valid ID"
            items={[
              {
                label: "Driver's License",
                value: "Driver's License",
              },
              {
                label: 'National Identification Number',
                value: 'National Identification Number',
              },
            ]}
          />
          <FormDocPicker
            label="Upload a valid ID"
            name="id"
            placeholder="Upload a valid ID"
            note={{
              description: 'File type accepted include: PDF, PNG, JPEG <100kb size',
            }}
          />
          <Divider />
          <Submit label="Continue" />
        </Form>
      </>
    </Container>
  );
}
