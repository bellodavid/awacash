import {
  AccountCard,
  AltHeader,
  Container,
  SheetContainer,
  TagTitle,
  VirtualScroll,
} from 'components';
import { pallets } from 'constant';
import { StackNavigationProps, TransferRoutes } from 'navigation';

export default function AwacashSelectAccount({
  navigation,
}: StackNavigationProps<TransferRoutes, 'AwacashSelectAccount'>): JSX.Element {
  return (
    <>
      <AltHeader color={pallets.primary} label="Transfer Money" />
      <SheetContainer>
        <VirtualScroll>
          <Container backgroundColor="transparent">
            <TagTitle title="Select Account to Debit" marginBottom={40} />
            <AccountCard
              accountNumber="1234567890"
              balance="5000"
              name="Silver George"
              variant="small"
              onPress={() => {
                navigation.navigate('AwacashTransfer');
              }}
            />
          </Container>
        </VirtualScroll>
      </SheetContainer>
    </>
  );
}
