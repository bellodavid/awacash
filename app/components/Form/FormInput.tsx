import { forwardRef } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { Text } from '../General';

import { layout, pallets } from 'constant';
import { Icon } from 'assets';
import { useTheme } from 'hooks';

const { height, inputRadius, borderSize } = layout.input;
const { fonts } = layout;

export interface FormInputProps extends TextInputProps {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
  errorMessage?: string;
  marginBottom?: number;
  labelColor?: string;
  disabled?: boolean;
  valid?: boolean;
  note?: string;
  noteVisible?: boolean;
  noteColor?: 'text' | 'primary';
  noteWeight?: 'reg' | 'bold';
  placeholder?: string;
  isLoading?: boolean;
  isError?: boolean;
  isErrorMessage?: string;
  rightIcon?: IconName;
  onRightIconPress?: () => void;
  editable?: boolean;
}

const FormInput = forwardRef<TextInput, FormInputProps>(function (
  {
    label,
    value,
    onChangeText,
    error,
    labelColor,
    marginBottom = 20,
    isLoading,
    isError,
    isErrorMessage,
    errorMessage,
    disabled: dsb,
    note,
    rightIcon,
    onRightIconPress,
    noteVisible,
    editable = true,
    placeholder,
    noteColor,
    noteWeight,
    ...props
  }: FormInputProps,
  ref,
): JSX.Element | null {
  const { color } = useTheme();
  const disabled = isLoading || dsb || isError || !editable;

  return (
    <>
      <Text
        variant="reg-400"
        size={fonts.subhead}
        color={disabled ? color.border : error ? color.red : color.textSecondary}
        style={{
          marginBottom: 8,
          paddingLeft: 5,
        }}>
        {label}
      </Text>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color.input,
            borderColor: disabled ? color.border : error ? color.red : color.transparent,
          },
        ]}>
        <TextInput
          editable={!disabled}
          placeholder={placeholder || label}
          placeholderTextColor={labelColor || pallets.grey2}
          style={[
            styles.input,
            {
              color: disabled ? color.border : error ? color.red : color.text,
              fontFamily: 'DMSansRegular',
              height: '100%',
            },
          ]}
          {...{ onChangeText, ref, value, ...props }}
        />
        {isLoading && <ActivityIndicator size="small" />}
        {rightIcon && (
          <TouchableOpacity activeOpacity={0.7} onPress={onRightIconPress}>
            <Icon name={rightIcon} size={16} />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginBottom,
          marginTop: isError || noteVisible || error ? 10 : 0,
        }}>
        {error && !isError && (
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
              {errorMessage}
            </Text>
          </View>
        )}
        {isError && (
          <>
            <Icon name="info" size={20} style={{ marginRight: 10 }} color={pallets.red} />
            <Text size={fonts.subhead} style={{ flex: 1 }} color={color.red}>
              {isErrorMessage}
            </Text>
          </>
        )}
        {noteVisible && !error && !isError && (
          <View style={styles.note}>
            <Text
              variant={noteWeight === 'bold' ? 'bold-700' : undefined}
              size={fonts.subhead}
              color={noteColor === 'primary' ? color.primary : color.text}>
              {note}
            </Text>
          </View>
        )}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: inputRadius,
    borderWidth: borderSize,
    flexDirection: 'row',
    height,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  note: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default FormInput;
