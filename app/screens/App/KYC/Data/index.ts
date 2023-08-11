import { NavigatorScreenParams } from '@react-navigation/native';

import { pallets } from 'constant';
import { KYCRoutes } from 'navigation';

interface KYCSection {
  button: string;
  label: string;
  icon: IconName;
  color: string;
  route?: NavigatorScreenParams<KYCRoutes>;
}

export const kycSection: KYCSection[] = [
  {
    button: 'Not Done',
    color: pallets.secondary,
    icon: 'key-square',
    label: 'Add you BVN',
    route: {
      screen: 'VerifyBVN',
    },
  },

  {
    button: 'Not Done',
    color: pallets.secondary,
    icon: 'camera',
    label: 'Take a selfie',
    route: {
      screen: 'TakeSelfie',
    },
  },
  {
    button: 'Not Done',
    color: pallets.orange,
    icon: 'receipt-2',
    label: 'Upload utility bill and valid ID',
    route: {
      screen: 'CaptureDoc',
    },
  },
  {
    button: 'Not Done',
    color: pallets.secondary,
    icon: 'biometric-android-fingerprint',
    label: 'Enable Biometrics',
  },
];
