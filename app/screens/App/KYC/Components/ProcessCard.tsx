import { Pressable, StyleSheet, View } from 'react-native';

import { pallets } from 'constant';
import { Icon } from 'assets';
import { Text } from 'components';

interface ProcessCardProp {
  color?: string;
  label?: string;
  iconName?: string;
  button?: string;
  processed?: boolean;
  onPress?: () => void;
  size?: number;
}
const ProcessCard = ({
  label,
  iconName,
  button,
  processed,
  color,
}: ProcessCardProp): JSX.Element => {
  const backgroundColor = processed ? pallets.secondary : pallets.deactivate;
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Icon name={iconName} color={color} size={20} />
        <View style={{ width: 150 }}>
          <Text variant="reg-400">{label}</Text>
        </View>
        <Pressable
          style={{
            alignItems: 'center',
            backgroundColor,
            borderRadius: 8,
            height: 30,
            width: 70,
          }}>
          <Text
            variant="reg-400"
            size={13}
            style={{ alignSelf: 'center', color: pallets.white, marginTop: 6 }}>
            {button}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProcessCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 15,
    width: '80%',
    zIndex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: pallets.primaryGrey,
    borderColor: pallets.primaryGrey,
    borderRadius: 5,
    borderWidth: 0.1,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
  },
});
