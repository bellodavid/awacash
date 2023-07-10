import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { pallets } from 'constant';
import { AppNavigator, AuthNavigator } from 'navigation';
import { useSelector } from 'store';

SplashScreen.preventAutoHideAsync();

const theme: Theme = {
  colors: {
    background: pallets.white,
    border: pallets.border,
    card: pallets.card,
    notification: pallets.notification,
    primary: pallets.primary,
    text: pallets.text,
  },
  dark: false,
};

const fonts = {
  DMSansBold: require('../assets/fonts/DMSans-Bold.ttf'),
  DMSansMedium: require('../assets/fonts/DMSans-Medium.ttf'),
  DMSansRegular: require('../assets/fonts/DMSans-Regular.ttf'),
};

export default function LoadApp(): JSX.Element | null {
  const { isAuthenticated } = useSelector(state => state.auth);
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <NavigationContainer {...{ theme }}>
        <SafeAreaProvider>
          {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
          <StatusBar style="dark" backgroundColor="transparent" translucent />
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
  );
}
