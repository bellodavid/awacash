import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { useHeaderHeight, useTheme } from 'hooks';
import { layout } from 'constant';
import { Text } from 'components';

const { padding } = layout.spacing;

export interface AltHeaderProps {
  color?: string;
  onPress?: () => void;
  transparent?: boolean;
  hideBackIcon?: boolean;
  label?: string;
  iconColor?: string;
}

export default function AltHeader({
  onPress,
  color: Color,
  hideBackIcon,
  iconColor,
  transparent,
  label,
}: AltHeaderProps): JSX.Element | null {
  const { insets, headerHeight } = useHeaderHeight();
  const { color } = useTheme();
  const navigation = useNavigation();

  const handleBackIcon = () => navigation.canGoBack() && navigation.goBack();

  const backgroundColor = transparent ? 'transparent' : Color || color.card;

  return (
    <>
      <View style={{ backgroundColor, height: insets.top }} />
      <View
        style={[
          styles.header,
          {
            backgroundColor,
            height: headerHeight - insets.top,
            paddingHorizontal: padding / 2,
          },
        ]}>
        {navigation.canGoBack() && !hideBackIcon && (
          <TouchableOpacity
            onPress={() => {
              handleBackIcon();
              onPress && onPress();
            }}>
            <Ionicons
              size={26}
              color={iconColor}
              style={{ left: 20, top: 10 }}
              name="arrow-back-outline"
            />
          </TouchableOpacity>
        )}
        <View style={styles.label}>
          <Text color={iconColor} variant="bold-700" size={24} textTransform="capitalize">
            {label}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    top: 10,
  },
  label: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: -1,
  },
});
