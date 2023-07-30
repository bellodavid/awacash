import {
  AltHeader,
  Container,
  Divider,
  Form,
  FormField,
  FormMaskField,
  SheetContainer,
  Submit,
  TagTitle,
  VirtualScroll,
} from 'components';
import { pallets } from 'constant';
import { StackNavigationProps, TransferRoutes } from 'navigation';

export default function AwacashTransfer({
  navigation,
}: StackNavigationProps<TransferRoutes, 'AwacashTransfer'>): JSX.Element {
  return (
    <>
      <AltHeader color={pallets.primary} label="Awacash Transfer" />
      <SheetContainer>
        <VirtualScroll>
          <Container backgroundColor="transparent">
            <TagTitle title="Enter Details" marginBottom={40} />
            <Form
              initialValues={{
                accountNumber: '',
                amount: '',
                details: '',
              }}
              onSubmit={val => {
                console.log(val);
                navigation.navigate('AwacashTransferConfirmation');
              }}>
              <FormField name="accountNumber" label="Account Number" />
              <FormMaskField name="amount" label="Amount" />
              <FormField name="details" label="Details" multiline />
              <Divider />
              <Submit label="Next" />
            </Form>
          </Container>
        </VirtualScroll>
      </SheetContainer>
    </>
  );
}
