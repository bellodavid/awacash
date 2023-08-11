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
      <>
        <VirtualScroll bounces={false}>
          <Container>
            <View style={styles.header}>
              <Divider space="m" />
              <TouchableOpacity>
                <View style={styles.imgContainer}>
                  <Icon name="user" color={pallets.white} size={20} />
                  <Image
                    source={{ uri: 'https://source.unsplash.com/aoEwuEH7YAs/1000x1000' }}
                    style={styles.image}
                  />
                  <View style={styles.edit}>
                    <Icon name="edit-2" size={16} color={pallets.white} />
                  </View>
                </View>
              </TouchableOpacity>
              <Divider space="t" />
              <Text variant="bold-700" color={pallets.black} size={fonts.subhead}>
                Silver George
              </Text>
              <Divider space="t" />
              <Text size={fonts.caption2} color={pallets.grey2}>
                Status: Level 1
              </Text>
            </View>
            <Divider space="xl" />
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
        </VirtualScroll>
      </>
    </>
  );
}

const ICON_BOX = 20;
const EDIT_ICON_BOX = 10;

const styles = StyleSheet.create({
  edit: {
    alignItems: 'center',
    backgroundColor: pallets.primary,
    borderRadius: ICON_BOX / 2,
    bottom: EDIT_ICON_BOX,
    height: ICON_BOX,
    justifyContent: 'center',
    padding: EDIT_ICON_BOX,
    position: 'absolute',
    right: 0,
    width: ICON_BOX,
    zIndex: EDIT_ICON_BOX,
  },
  header: {
    alignItems: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: misc.avatarLarge / 2,
    height: undefined,
    width: undefined,
  },
  imgContainer: {
    alignItems: 'center',
    borderRadius: misc.avatarLarge,
    height: misc.avatarLarge,
    justifyContent: 'center',
    width: misc.avatarLarge,
  },
  sectionCard: {
    alignItems: 'center',
    borderColor: pallets.border,
    borderRadius: spacing.s,
    borderWidth: 0.2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.l,
    paddingHorizontal: spacing.padding,
    shadowColor: pallets.grey3,
    shadowOffset: {
      height: spacing.s,
      width: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: spacing.s,
  },
});
