import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;
  //   Dashboard: NavigatorScreenParams<DashboardRoutes>;
  //   Account: NavigatorScreenParams<ProfileRoutes>;
};

export type TabRoutes = {
  Home: undefined;
  Savings: undefined;
  Loans: undefined;
  More: undefined;
};
