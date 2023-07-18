import { Container, Divider, Form, FormField, Submit, Title } from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function ValidID({
  navigation,
}: StackNavigationProps<AuthRoutes, 'ValidID'>): JSX.Element {
  return (
    <Container header>
      <>
        <Title title="Valid ID" subtitle="Select and upload a valid Id" />
        <Form
          initialValues={{
            id: '',
            idType: '',
          }}
          onSubmit={values => {
            console.log('🚀 ~ file: ValidID.tsx:14 ~ ValidID ~ values:', values);
            navigation.navigate('CaptureDoc');
          }}>
          <FormField
            //TODO: Change to Picker
            label="Valid ID"
            name="idType"
            placeholder="Select valid ID"
          />
          <FormField
            //TODO: Change to Picker
            label="Upload a valid ID"
            name="id"
            placeholder="Upload a valid ID"
            note="File type accepted include: PDF, PNG, JPEG <100kb size"
            noteVisible
          />
          <Divider />
          <Submit label="Continue" />
        </Form>
      </>
    </Container>
  );
}
