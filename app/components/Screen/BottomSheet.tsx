import { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { Divider } from '../Element';

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          bottomSheetRef.current?.snapToPosition('50%');
        }}>
        <Text>Open</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <BottomSheetFlatList
            data={[1, 2, 3, 4]}
            ItemSeparatorComponent={() => <Divider space="s" />}
            contentContainerStyle={{ borderWidth: 1, paddingHorizontal: 8 }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    console.log(item);
                    bottomSheetRef.current?.close();
                  }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
  },
  item: {
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    padding: 8,
  },
});

export default App;
