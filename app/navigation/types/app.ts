import { NavigatorScreenParams } from '@react-navigation/native';

export type AppRoutes = {
  TabStack: NavigatorScreenParams<TabRoutes>;
  HomeStack: NavigatorScreenParams<HomeRoutes>;
  MoreStack: NavigatorScreenParams<MoreRoutes>;
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

export type MoreRoutes = {
  More: undefined;
  MoreSuccess: undefined;

  UpgradeAccount: undefined;
  LevelOne: undefined;
  LevelTwo: undefined;

  Security: undefined;
  RequestChangeOTP: undefined;
  ValidateChangeOTP: undefined;
  ChangePassword: undefined;
  BiometricSettings: undefined;
  ChangePin: undefined;
};
