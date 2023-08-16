import { useState } from 'react';
import { Platform } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

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

type VerifyBVNProps = StackNavigationProps<KYCRoutes, 'VerifyBVN'>;

export default function VerifyBVN({ navigation }: VerifyBVNProps): JSX.Element {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === 'set') {
      const currentDate = selectedDate || date;
      setDate(currentDate);
      if (Platform.OS === 'android') {
        toggleDatePicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatePicker();
    }
  };

  const formatDate = (rawDate: Date) => {
    const fdate = new Date(rawDate);
    const year = fdate.getFullYear();
    let month = fdate.getMonth() + 1;
    let day: number = fdate.getDate();

    month = month < 10 ? Number.parseInt(`0${month}`, 10) : month;
    day = day < 10 ? Number.parseInt(`0${day}`, 10) : day;

    return `${day}/${month}/${year}`;
  };

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
          value={dateOfBirth}
          placeholder="dd/mm/yyyy"
          onRightIconPress={toggleDatePicker}
          onChangeText={setDateOfBirth}
        />

        {showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
            style={{ zIndex: 1 }}
          />
        )}
        <Divider />
        <Submit label="Verify" />
        <Divider />
        <ActionText action="Contact support" question="Unable to validate BVN?" />
      </Form>
    </Container>
  );
}
