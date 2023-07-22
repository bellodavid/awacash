import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlatList,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useFormikContext } from 'formik';

import { Text } from '../General';
import { Divider } from '../Element';

import { layout, pallets } from 'constant';
import { useTheme } from 'hooks';
import { Icon } from 'assets';

interface FieldKeys {
  id: PickerItemProps;
  type: PickerItemProps;
}

interface Props {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  marginBottom?: number;
  items?: PickerItemProps[];
  onSelect?: (item: PickerItemProps) => void;
  name: keyof FieldKeys;
  isLoading?: boolean;
  search?: boolean;
  note?: {
    description: string;
    color?: 'text' | 'primary';
    weight?: 'reg' | 'bold';
  };
}

const { fonts, input } = layout;

export default function FormPicker({
  label,
  placeholder,
  disabled,
  marginBottom = 20,
  items,
  name,
  isLoading,
  onSelect,
  note,
  search: showSearch,
}: Props): JSX.Element | null {
  const [search, setSearch] = useState('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<FieldKeys>();

  const { color } = useTheme();

  const error = !!(errors[name] && touched[name]);
  const value = values[name]?.value;

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const BackDrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={1} />
    ),
    [],
  );

  return (
    <>
      <Text
        variant="reg-400"
        size={fonts.subhead}
        color={disabled ? color.border : error ? color.red : color.textSecondary}
        style={{
          marginBottom: 8,
          paddingLeft: 4,
        }}>
        {label}
      </Text>
      <TouchableOpacity
        onPress={() => {
          handlePresentModalPress();
          setFieldTouched(name);
        }}
        style={[
          styles.container,
          {
            backgroundColor: color.input,
            borderColor: disabled ? color.border : error ? color.red : color.transparent,
          },
        ]}>
        <View style={{ flex: 1 }}>
          <Text color={value ? color.text : pallets.grey2}>
            {values[name]?.label || placeholder || label}
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Icon size={20} name="chevron-down" color={color.grey} />
        )}
      </TouchableOpacity>
      <View style={[{ marginBottom }]}>
        {Boolean(note) && !error && (
          <View style={styles.note}>
            <Text
              variant={note?.weight === 'bold' ? 'bold-700' : undefined}
              size={fonts.subhead}
              color={note?.color === 'primary' ? color.primary : color.text}>
              {note?.description}
            </Text>
          </View>
        )}
      </View>
      <BottomSheetModal
        backdropComponent={BackDrop}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        index={1}
        enablePanDownToClose>
        <>
          {showSearch && (
            <View
              style={[
                styles.search,
                { backgroundColor: color.input, marginHorizontal: 8 },
              ]}>
              <TextInput
                onFocus={() => console.log('Focused')}
                style={[styles.input, { color: color.text }]}
                placeholder="Search"
                placeholderTextColor={pallets.grey2}
                value={search}
                onChangeText={text => setSearch(text)}
              />
            </View>
          )}
          <Divider />
          <BottomSheetFlatList
            data={items?.filter(item =>
              item?.label?.toLowerCase()?.includes(search?.toLowerCase()),
            )}
            ItemSeparatorComponent={() => <Divider space="s" />}
            contentContainerStyle={{
              paddingHorizontal: 8,
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.pickerItem}
                  onPress={() => {
                    setFieldValue(name, item);
                    onSelect?.(item);
                    bottomSheetModalRef.current?.close();
                  }}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: input.inputRadius,
    borderWidth: input.borderSize,
    flexDirection: 'row',
    height: input.height,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  input: {
    fontFamily: 'DMSansMedium',
    height: '100%',
    padding: 8,
  },
  note: {
    alignItems: 'flex-end',
    flex: 1,
  },
  pickerItem: {
    height: 40,
    justifyContent: 'center',
    padding: 8,
  },
  search: {
    borderRadius: input.inputRadius,
    height: input.height,
  },
});
