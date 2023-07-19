import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';

import { lottie } from 'assets';
import { layout, pallets } from 'constant';
import { Divider, Text } from 'components';

export default function Advert(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7 }}>
        <Text variant="bold-700" color={pallets.white}>
          Cowry App
        </Text>
        <Divider space="t" />
        <Text color={pallets.white} size={layout.fonts.callout}>
          Want some discount? Download the cowry app to get started.
        </Text>
        <Divider space="s" />
        <TouchableOpacity style={styles.btn}>
          <Text variant="bold-700" size={layout.fonts.callout}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.3,
        }}>
        <Lottie
          source={lottie['tag-anim']}
          autoPlay
          loop={false}
          style={{
            bottom: 0,
            height: 100,
            // position: 'absolute',
            right: 0,
            width: 100,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'flex-start',
    backgroundColor: pallets.white,
    borderRadius: 8,
    padding: 8,
  },
  container: {
    backgroundColor: pallets.black,
    borderRadius: 8,
    flexDirection: 'row',
    height: 145,
    overflow: 'hidden',
    padding: 20,
  },
});
