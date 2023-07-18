import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { AnimPaginator, HomeHeader } from './Components';

import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';
import { AccountCard, Container, VirtualScroll } from 'components';
import { layout } from 'constant';

const { cards, spacing } = layout;

export default function Home({
  navigation: _nav,
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
            renderItem={() => {
              return (
                <AccountCard
                  accountNumber="0012234455"
                  balance="5000"
                  name="Silver George"
                  width={cards.cardWidth}
                  marginRight={spacing.padding}
                />
              );
            }}
          />
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <AnimPaginator key={index} {...{ index, translateX }} />
            ))}
          </View>
          <View style={[styles.container]} />
        </Container>
      </VirtualScroll>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
  },
});
