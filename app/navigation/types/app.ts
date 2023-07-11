import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;
  HomeStack: NavigatorScreenParams<HomeRoutes>;
  //   Account: NavigatorScreenParams<ProfileRoutes>;
};

export type TabRoutes = {
  Home: undefined;
  Savings: undefined;
  Loans: undefined;
  More: undefined;
};

export type HomeRoutes = {
  TransferMethod: undefined;
};
