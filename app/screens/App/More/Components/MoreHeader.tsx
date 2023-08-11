import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from 'components';
import { useHeaderHeight, useTheme } from 'hooks';
import { layout, pallets } from 'constant';
import { Icon } from 'assets';

const { spacing, fonts } = layout;

export default function MoreHeader(): JSX.Element | null {
  const { insets, headerHeight } = useHeaderHeight();
  const { color } = useTheme();

  return (
    <>
      <View style={{ backgroundColor: pallets.primary, height: insets.top }} />
      <View
        style={[
          styles.header,
          {
            backgroundColor: pallets.primary,
            height: headerHeight - insets.top,
            paddingHorizontal: spacing.padding / 2,
          },
        ]}>
        <View />
        <View style={styles.label}>
          <Text
            color={color.white}
            variant="bold-700"
            size={fonts.body}
            textTransform="capitalize">
            More
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('notif');
          }}>
          <Icon size={spacing.m} color={color.primary} name="notification" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
});
