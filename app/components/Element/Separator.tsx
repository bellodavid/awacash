import { StyleSheet, View } from 'react-native';

import { useTheme } from 'hooks';

interface SeparatorProps {
  width?: `${number}%`;
}

function Separator({ width = '90%' }: SeparatorProps): JSX.Element | null {
  const { color } = useTheme();

  return (
    <View
      style={[
        styles.separator,
        {
          backgroundColor: `${color.grey}`,
          width,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    height: 1,
  },
});

export default Separator;
