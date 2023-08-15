import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { Container, Divider, TabHeader, Text, VirtualScroll } from 'components';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const savingData = [
  {
    description:
      'With monthly Target Saving, you have the flexibility to set your own savings target for each month. ',
    title: 'Target Saving',
  },
  {
    description:
      "Whether you're saving for a long-term investment, a major purchase, or simply looking to grow your wealth, this innovative feature offers you peace of mind and financial stability with 12% interest per annum.",
    title: 'Fixed Deposit',
  },
];

const { spacing, fonts } = layout;

export default function Savings(): JSX.Element {
  return (
    <>
      <TabHeader title="Savings" />
      <Container backgroundColor={pallets.primary}>
        <VirtualScroll bounces={false}>
          <Text color={pallets.white}>Select a savings plan to start saving</Text>
          <Divider />
          <FlatList
            data={savingData}
            ItemSeparatorComponent={() => <Divider />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={styles.item} activeOpacity={0.9}>
                  <Icon name="calendar" color={pallets.primary} />
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
        </VirtualScroll>
      </Container>
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
