import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Divider, TabHeader, Text, VirtualScroll } from 'components';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const description = 'We make a loan decision based on the information we have about you.';

const savingData = [
  {
    description,
    title: 'Apply for a loan',
  },
  {
    description,
    title: 'Manage loans',
  },
  {
    description,
    title: 'Loan repayment',
  },
  {
    description,
    title: 'Loan history',
  },
];

const { spacing, fonts } = layout;

export default function Loans(): JSX.Element {
  return (
    <>
      <TabHeader title="Loans" />
      <VirtualScroll bounces={false}>
        <Container backgroundColor={pallets.primary}>
          <Text color={pallets.white}>Select a savings plan to start saving</Text>
          <Divider />
          <FlatList
            data={savingData}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.item} activeOpacity={0.9}>
                  <Icon name="moneys" color={pallets.primary} />
                  <Divider space="m" />
                  <Text variant="bold-700" color={pallets.dark}>
                    {item.title}
                  </Text>
                  <Divider space="s" />
                  <Text size={fonts.caption1} color={pallets.dark}>
                    {item.description}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: pallets.white,
    borderRadius: spacing.s,
    padding: spacing.m,
    paddingVertical: spacing.l,
  },
});
