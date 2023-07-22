import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Lottie from 'lottie-react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { Advert, AnimPaginator, HomeHeader } from './Components';
import { homeSection, transactions } from './Data';

import { AppRoutes, RootNavigationProp, TabRoutes } from 'navigation';
import { AccountCard, Container, Divider, Text, VirtualScroll } from 'components';
import { layout, pallets } from 'constant';
import { formatCurrency, loopedColor } from 'utils';
import { Icon, lottie } from 'assets';
import { useTheme } from 'hooks';

const { cards, spacing, fonts, misc } = layout;

export default function Home({
  navigation,
}: RootNavigationProp<AppRoutes, TabRoutes, 'Home'>): JSX.Element {
  const aref = useAnimatedRef<Animated.FlatList<number | null>>();
  const { color } = useTheme();
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
          <View style={[styles.section, { paddingTop: 0 }]}>
            <Text variant="bold-700">Quick Link</Text>
            <Divider space="m" />
            <FlatList
              data={homeSection}
              numColumns={4}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ borderWidth: 1 }}
              // eslint-disable-next-line sonarjs/no-duplicate-string
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
            <View style={[styles.row, { justifyContent: 'space-between' }]}>
              <Text variant="bold-700">Transactions</Text>
              <TouchableOpacity>
                <Text variant="medium-500" color={pallets.primary}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <Divider space="m" />
            <FlatList
              data={transactions}
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
              ItemSeparatorComponent={() => <Divider space="s" />}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    disabled
                    style={[
                      styles.row,
                      styles.transactionCard,
                      { backgroundColor: color.altBG, justifyContent: 'space-between' },
                    ]}>
                    <View style={styles.row}>
                      <Icon
                        name={
                          item.type === 'credit' ? 'arrow-down-circle' : 'arrow-up-circle'
                        }
                        color={item.type === 'credit' ? pallets.green : pallets.red}
                      />
                      <View style={{ marginLeft: 8 }}>
                        <Text textTransform="capitalize">{item.type}</Text>
                        <Divider space="t" />
                        <Text
                          color={color.darkGrey}
                          size={fonts.callout}
                          textTransform="capitalize">
                          {item.message}
                        </Text>
                        <Text
                          color={color.darkGrey}
                          size={fonts.callout}
                          textTransform="capitalize">
                          {new Date().toLocaleDateString()}
                        </Text>
                      </View>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text size={fonts.callout} variant="bold-700">
                        {formatCurrency(item.amount)}
                      </Text>
                      <Divider space="t" />
                      <Text size={fonts.callout}>{new Date().toLocaleTimeString()}</Text>
                    </View>
                  </TouchableOpacity>
                );
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
    height: misc.pagination,
    justifyContent: 'center',
  },
  pill: {
    alignItems: 'center',
    borderRadius: misc.pill / 2,
    height: misc.pill,
    justifyContent: 'center',
    width: misc.pill,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  section: {
    padding: spacing.padding,
  },
  transactionCard: {
    borderRadius: 16,
    padding: spacing.padding,
  },
});
