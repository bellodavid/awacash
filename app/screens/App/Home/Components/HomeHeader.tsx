import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { useHeaderHeight } from 'hooks';
import { layout } from 'constant';
import { Divider, Text } from 'components';
import { Icon } from 'assets';

const { fonts, spacing, misc } = layout;

interface Props {
  image?: string | null;
}

export default function HomeHeader({ image }: Props): JSX.Element | null {
  const { insets, headerHeight } = useHeaderHeight();
  //   const navigation = useNavigation();

  return (
    <>
      <View style={{ height: insets.top }} />
      <View
        style={[
          styles.row,
          {
            height: headerHeight - insets.top,
            justifyContent: 'space-between',
            paddingHorizontal: spacing.padding / 2,
          },
        ]}>
        <View style={styles.row}>
          <TouchableOpacity>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : <View />}
          </TouchableOpacity>
          <Divider horizontal space="s" />
          <Text size={fonts.callout}>Good Morning</Text>
        </View>
        <Icon name="notification" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: misc.avatar / 2,
    height: misc.avatar,
    width: misc.avatar,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
