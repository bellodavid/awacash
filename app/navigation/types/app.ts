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
  Transfer: NavigatorScreenParams<TransferRoutes>;
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

export type KYCRoutes = {
  VerifyBVN: undefined;
  ValidateBVN: undefined;
  Address: undefined;
  ValidID: undefined;
  CaptureDoc: undefined;
  TakeSelfie: undefined;
};

export type TransferRoutes = {
  TransferMethod: undefined;
  TransferSuccess: undefined;
  Beneficiary: undefined;

  AwacashSelectAccount: undefined;
  AwacashTransfer: undefined;
  AwacashTransferConfirmation: undefined;
  AwacashTransferPin: undefined;

  MyAccountSelect: undefined;
  MyAccountTransfer: undefined;
  MyAccountConfirm: undefined;
  MyAccountPin: undefined;

  BankSelectAccount: undefined;
  BankTransfer: undefined;
  BankConfirmation: undefined;
  BankPin: undefined;
};
