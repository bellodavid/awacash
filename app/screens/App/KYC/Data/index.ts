import { pallets } from 'constant';
import { KYCRoutes } from 'navigation';

interface KYCSection {
  label: string;
  icon: IconName;
  color: string;
  route?: keyof Omit<KYCRoutes, 'KYCSuccess'>;
}

export const kycSection: KYCSection[] = [
  {
    color: pallets.secondary,
    icon: 'key-square',
    label: 'Add you BVN',
    route: 'VerifyBVN',
  },

  {
    color: pallets.secondary,
    icon: 'camera',
    label: 'Take a selfie',
    route: 'TakeSelfie',
  },
  {
    color: pallets.orange,
    icon: 'receipt-2',
    label: 'Upload utility bill and valid ID',
    route: 'CaptureDoc',
  },
  {
    color: pallets.secondary,
    icon: 'biometric-android-fingerprint',
    label: 'Enable Biometrics',
  },
];
