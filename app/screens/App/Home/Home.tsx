import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { Advert, AnimPaginator, HomeHeader } from './Components';
import { homeSection } from './Data';

import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';
import { AccountCard, Container, Divider, Text, VirtualScroll } from 'components';
import { layout, pallets } from 'constant';
import { loopedColor } from 'utils';
import { Icon, lottie } from 'assets';

const { cards, spacing, fonts } = layout;

export default function Home({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Home'>): JSX.Element {
  const aref = useAnimatedRef<Animated.FlatList<number | null>>();
  const translateX = useSharedValue(0);

  const slides = [1, 2, 3];
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <>
      <HomeHeader image="https://source.unsplash.com/aoEwuEH7YAs/1000x1000" />
      <VirtualScroll>
        <Container paddingHorizontal={0}>
          <Animated.FlatList
            ref={aref}
            horizontal
            data={slides}
            ListHeaderComponent={<View style={{ width: spacing.padding }} />}
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            decelerationRate="fast"
            snapToInterval={cards.cardWidth + spacing.padding}
            renderItem={({ index }) => {
              return (
                <AccountCard
                  accountNumber="0012234455"
                  balance="5000"
                  name="Silver George"
                  width={cards.cardWidth}
                  marginRight={spacing.padding}
                  backgroundColor={loopedColor(index, [
                    pallets.primary,
                    pallets.secondary,
                    pallets.primaryBlack,
                  ])}
                />
              );
            }}
          />
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <AnimPaginator key={index} {...{ index, translateX }} />
            ))}
          </View>
          <View style={[styles.section]}>
            <Text variant="bold-700">Quick Link</Text>
            <Divider space="m" />
            <FlatList
              data={homeSection}
              numColumns={4}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ borderWidth: 1 }}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item }) => {
                return (
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (item.route) {
                          navigation.navigate('HomeStack', item.route);
                        }
                      }}
                      style={[styles.pill, { backgroundColor: item.color }]}>
                      <Icon name={item.icon} color={pallets.white} size={20} />
                    </TouchableOpacity>
                    <Divider space="s" />
                    <Text size={fonts.caption1}>{item.title}</Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.section}>
            <Advert />
          </View>
          <View style={[styles.section]}>
            <Text variant="bold-700">Transactions</Text>
            <Divider space="m" />
            <FlatList
              data={[]}
              ListEmptyComponent={() => (
                <View style={{ alignItems: 'center' }}>
                  <Lottie
                    source={lottie['empty-anim']}
                    autoPlay
                    loop
                    style={{
                      height: 200,
                      width: 200,
                    }}
                  />
                </View>
              )}
              renderItem={() => {
                return <View />;
              }}
            />
          </View>
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  pagination: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
  },
  pill: {
    alignItems: 'center',
    borderRadius: 28,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  section: {
    padding: spacing.padding,
  },
});
