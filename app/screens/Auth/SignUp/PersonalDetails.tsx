import { useRef } from 'react';
import { TextInput } from 'react-native';

import {
  Container,
  Divider,
  Form,
  FormField,
  Submit,
  Title,
  VirtualScroll,
} from 'components';
import { AuthRoutes, StackNavigationProps } from 'navigation';

export default function PersonalDetails({
  navigation,
}: StackNavigationProps<AuthRoutes, 'PersonalDetails'>): JSX.Element {
  const middleNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);

  return (
    <Container header>
      <VirtualScroll>
        <Title
          title="Personal Detail"
          subtitle="Please, add your name as it appears on your official documents"
        />
        <Form
          initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
          }}
          onSubmit={values => {
            console.log('🚀 ~ file: PersonalDetails.tsx:41 ~ values:', values);
            navigation.navigate('CreatePin');
          }}>
          <FormField
            autoCorrect={false}
            name="firstName"
            label="First Name"
            icon="profile-circle"
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef.current?.focus()}
          />
          <FormField
            autoCorrect={false}
            ref={lastNameRef}
            name="lastName"
            label="Last Name"
            icon="profile-circle"
            returnKeyLabel="Next"
            returnKeyType="next"
            onSubmitEditing={() => middleNameRef.current?.focus()}
          />
          <FormField
            autoCorrect={false}
            ref={middleNameRef}
            name="middleName"
            label="Middle Name"
            icon="profile-circle"
            returnKeyLabel="Go"
            returnKeyType="go"
          />
          <Divider space="xxl" />
          <Submit label="Continue" />
          <Divider />
        </Form>
      </VirtualScroll>
    </Container>
  );
}
