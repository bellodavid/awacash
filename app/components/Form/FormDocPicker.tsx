import { useFormikContext } from 'formik';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { Icon } from 'assets';
import { Text } from 'components/General';
import { layout, pallets } from 'constant';
import { useTheme } from 'hooks';

interface FieldKeys {
  type: ImagePicker.ImagePickerSuccessResult;
  id: ImagePicker.ImagePickerSuccessResult;
}

interface Props {
  label?: string;
  placeholder?: string;
  name: keyof FieldKeys;
  note?: {
    description: string;
    color?: 'text' | 'primary';
    weight?: 'reg' | 'bold';
  };
  disabled?: boolean;
  marginBottom?: number;
}

const { fonts, input } = layout;

type PickerOptionType = 'camera' | 'upload';
const pickerOption: PickerOptionType[] = ['camera', 'upload'];

export default function FormDocPicker({
  name,
  label,
  note,
  placeholder,
  disabled,
  marginBottom = 20,
}: Props): JSX.Element | null {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['20%', '25%', '50%'], []);

  const { color } = useTheme();

  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext<FieldKeys>();

  const error = !!(errors[name] && touched[name]);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const BackDrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={1} />
    ),
    [],
  );

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
        multiple: false,
        // type: 'application/pdf',
      });

      if (result.type === 'success') {
        console.log(result.file);
        setFieldValue(name, result.type);
      }
    } catch {
      Alert.alert('', "Couldn't select document");
    }
  };

  const handleTakePicture = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (!status) {
        Alert.alert(
          'Permission required',
          'We need Camera roll permission to access your photos',
          [
            { text: 'Dismiss' },
            {
              onPress: handleTakePicture,
              text: 'Try Again',
            },
          ],
        );

        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.2,
      });

      if (!result.canceled) {
        console.log(result.assets[0]);
        setFieldValue(name, result);
      }
    } catch {
      //TODO: DELETE ON PROD
      if (__DEV__) {
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.2,
        });

        if (!result.canceled) {
          console.log(result.assets[0]);
          setFieldValue(name, result);
        }
      }
    }
  };

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
          setFieldTouched(name);
          handlePresentModalPress();
        }}
        style={[
          styles.container,
          {
            backgroundColor: color.input,
            borderColor: disabled ? color.border : error ? color.red : color.transparent,
          },
        ]}>
        <View style={{ flex: 1 }}>
          <Text color={values[name] ? color.text : pallets.grey2}>
            {values[name]?.assets[0]?.fileName || placeholder || label}
          </Text>
        </View>
        <Icon size={20} name="chevron-down" color={color.grey} />
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom,
          marginTop: Boolean(note) || error ? 10 : 0,
        }}>
        {error && (
          <View
            style={{
              alignItems: 'center',
              backgroundColor: `${color.red}33`,
              borderRadius: 5,
              flex: 1,
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Icon name="info" size={20} style={{ marginRight: 10 }} color={pallets.red} />
            <Text size={fonts.subhead} style={{}} color={color.red}>
              errors[name]
            </Text>
          </View>
        )}
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
        index={1}
        snapPoints={snapPoints}>
        {pickerOption.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.pickerItem}
              onPress={() => {
                bottomSheetModalRef.current?.close();

                if (item === 'upload') {
                  handleDocumentPicker();
                }

                if (item === 'camera') {
                  handleTakePicture();
                }
              }}>
              <Text>
                {item === 'camera' ? 'Take a picture' : 'Upload from your device'}
              </Text>
            </TouchableOpacity>
          );
        })}
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
  note: {
    alignItems: 'flex-end',
  },
  pickerItem: {
    height: 50,
    justifyContent: 'center',
    padding: 8,
  },
});
