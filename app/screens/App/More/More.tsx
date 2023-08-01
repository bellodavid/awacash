import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { MoreHeader } from './Components';
import { moreSection } from './Data';

import { Icon } from 'assets';
import { layout, pallets } from 'constant';
import { Container, Divider, Text, VirtualScroll } from 'components';
import { useTheme } from 'hooks';
import { setAuthenticated, useDispatch } from 'store';

const { fonts, spacing, misc } = layout;

export default function More(): JSX.Element {
  const { color } = useTheme();
  const dispatch = useDispatch();

  return (
    <>
      <MoreHeader />
      <VirtualScroll bounces={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <View style={styles.imgContainer}>
                <Icon name="user" color={pallets.white} size={20} />
                <Image
                  source={{ uri: 'https://source.unsplash.com/aoEwuEH7YAs/1000x1000' }}
                  style={styles.image}
                />
                <View style={styles.edit}>
                  <Icon name="edit-2" size={16} color={pallets.primary} />
                </View>
              </View>
            </TouchableOpacity>
            <Divider space="t" />
            <Text variant="bold-700" color={pallets.white} size={fonts.subhead}>
              Silver George
            </Text>
            <Text size={fonts.caption2} color={pallets.grey3}>
              Status: Level 1
            </Text>
            <View style={{ height: 20 }} />
          </View>
          <Container>
            <Divider />
            <FlatList
              data={moreSection}
              ItemSeparatorComponent={() => <Divider />}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      if (item.id === 'logout') {
                        console.log('Logging out...');
                        Alert.alert('', 'Are you sure you want to logout?', [
                          {
                            onPress() {
                              dispatch(setAuthenticated(false));
                            },
                            style: 'destructive',
                            text: 'Yes',
                          },
                          {
                            isPreferred: true,
                            style: 'cancel',
                            text: 'No',
                          },
                        ]);
                      }
                    }}
                    style={[styles.sectionCard, { backgroundColor: color.altBG }]}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                      <Icon
                        name={item.icon}
                        color={item.color}
                        style={{ marginRight: 12 }}
                        size={20}
                      />
                      <Text>{item.title}</Text>
                    </View>
                    <Icon name="chevron-right-outline" size={16} color={pallets.grey} />
                  </TouchableOpacity>
                );
              }}
            />
          </Container>
        </View>
      </VirtualScroll>
    </>
  );
}

const ICON_BOX = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  edit: {
    alignItems: 'center',
    backgroundColor: pallets.white,
    borderRadius: ICON_BOX / 2,
    bottom: 10,
    height: ICON_BOX,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    width: ICON_BOX,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: pallets.primary,
    padding: spacing.padding,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: misc.avatarLarge / 2,
    height: undefined,
    width: undefined,
  },
  imgContainer: {
    alignItems: 'center',
    borderColor: pallets.white,
    borderRadius: misc.avatarLarge / 2,
    borderWidth: 0.5,
    height: misc.avatarLarge,
    justifyContent: 'center',
    width: misc.avatarLarge,
  },
  sectionCard: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.l,
    paddingHorizontal: spacing.padding,
  },
});
