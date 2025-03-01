import { StyleSheet, View } from 'react-native';

import {
  AltHeader,
  Button,
  Container,
  Divider,
  ListItem,
  Separator,
  SheetContainer,
  Text,
  VirtualScroll,
} from 'components';
import { layout, pallets } from 'constant';
import { StackNavigationProps, TransferRoutes } from 'navigation';
import { abbreviateString, formatCurrency } from 'utils';

const { spacing, fonts } = layout;

export default function AwacashTransferConfirmation({
  navigation,
}: StackNavigationProps<TransferRoutes, 'AwacashTransferConfirmation'>): JSX.Element {
  return (
    <>
      <AltHeader color={pallets.primary} label="Confirmation" />
      <SheetContainer>
        <VirtualScroll>
          <Container backgroundColor="transparent">
            <Divider />
            <Text color={pallets.grey2}>Transfer to:</Text>
            <Divider />
            <View style={styles.row}>
              <View style={styles.accountAbbr}>
                <Text
                  textTransform="uppercase"
                  variant="medium-500"
                  color={pallets.white}>
                  {abbreviateString('Lade toye')}
                </Text>
              </View>
              <View>
                <Text variant="medium-500">Lade toye (Zenith Bank)</Text>
                <Divider space="t" />
                <Text size={fonts.caption1} color={pallets.grey2}>
                  Account number 9984748837
                </Text>
              </View>
            </View>
            <Divider />
            <Separator width="100%" color={pallets.grey3} />
            <Divider />
            <View>
              <Text size={fonts.caption1} color={pallets.grey2}>
                Transfer Details
              </Text>
              <Divider space="t" />
              <Text variant="medium-500">For allowance</Text>
            </View>
            <Divider />
            <Separator width="100%" color={pallets.grey3} />
            <Divider />
            <Text variant="bold-700">Overview</Text>
            <Divider space="s" />
            <ListItem label="Transaction amount" value={formatCurrency(1000)} />
            <ListItem label="Transaction fee" value={formatCurrency(0)} />
            <ListItem label="Total" value={formatCurrency(1000)} />
            <Separator width="100%" color={pallets.grey3} />
            <Divider space="xxl2" />
            <Button
              variant="secondary"
              color={pallets.secondary}
              label="Confirm"
              onPress={() => {
                navigation.navigate('AwacashTransferPin');
              }}
            />
          </Container>
        </VirtualScroll>
      </SheetContainer>
    </>
  );
}

const styles = StyleSheet.create({
  accountAbbr: {
    alignItems: 'center',
    backgroundColor: pallets.secondary,
    borderRadius: spacing.xxl,
    height: spacing.xxl,
    justifyContent: 'center',
    marginRight: spacing.s,
    width: spacing.xxl,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
