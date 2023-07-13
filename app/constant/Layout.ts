/* eslint-disable sort-keys */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const xSmall = width < 325;
const small = width >= 325 && width < 350; //325 > width > 350
const medium = width >= 350 && width < 450;
const large = width >= 450;

/**
 * Layout Constants
 * - Layout constants are used to define the layout of the app
 * @property fonts: { largeTitle: 34, title1: 28, title2: 22, title3: 20, headline: 17, body: 17, callout: 16, subhead: 15, footnote: 13, caption1: 12, caption2: 11}
 * @property spacing: { padding: 20, xs: 4, s: 8, m: 16, r: 20, l: 24, xl: 32, xxl: 40 }
 * @property button: { height: 50, width: width * 0.65, radius1: 8, radius2: 50 / 2 }
 * @property input: { height: 50, borderWidth: 1.5 }
 * @property cards: {},
 * @property misc: {},
 * @property window: { height, width},
 */

export default {
  dimension: {
    isSmallDevice: small,
    isMediumDevice: medium,
    isLargeDevice: large,
    isTinyDevice: xSmall,
    isPortrait: height > width,
    isLandscape: height < width,
    isTablet: width >= 450,
    isPhone: width < 450,
    isSmallOrTiny: small || xSmall,
  },
  fonts: {
    //fonts
    largeTitle: xSmall ? 28 : small ? 30 : 34,
    title1: xSmall ? 22 : small ? 24 : 28,
    title2: xSmall ? 20 : small ? 20 : 22,
    title3: xSmall ? 18 : small ? 18 : 20,
    headline: xSmall ? 14 : small ? 15 : medium ? 16 : 17,
    body: xSmall ? 14 : small ? 15 : medium ? 16 : 17,
    callout: xSmall ? 13 : small ? 14 : medium ? 14 : 16,
    subhead: xSmall ? 12 : small ? 13 : medium ? 14 : 15,
    footnote: xSmall ? 12 : small ? 12 : 13,
    caption1: xSmall ? 11 : small ? 11 : 12,
    caption2: xSmall ? 11 : small ? 11 : 11,
  },
  spacing: {
    padding: small ? 14 : 20,
    xs: 4,
    s: 8,
    m: 16,
    r: 20,
    l: 24,
    xl: 32,
    xxl: 40,
    xl2: 32 * 2,
    xxl2: 40 * 2,
  },
  button: {
    height: 54,
    width: '65%',
    radius: 8,
  },
  input: {
    height: 50,
    borderWidth: 1.5,
    inputBottom: 15,
    inputRadius: 10,
    borderSize: 1,
  },
  cards: {
    cardHeight: 55,
    cardRadius: 15,
  },
  misc: {
    icon: 24,
    toastHeight: 100,
    boxLayout: 80,
  },
  window: {
    height,
    width,
  },
};
