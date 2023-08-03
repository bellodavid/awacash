import { StyleSheet, View } from 'react-native';

import { useTheme } from 'hooks';
import { layout } from 'constant';
interface SheetContainerProps {
  children: React.ReactNode;
}

export default function SheetContainer({ children }: SheetContainerProps): JSX.Element {
  const { color } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 0,
    flex: 1,
    height: '85%',
    position: 'absolute',
    width: layout.window.width,
  },
});
