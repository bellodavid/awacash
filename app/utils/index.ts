import { RouteProp } from '@react-navigation/native';

import { TabRoutes } from 'navigation';

type TabIcon = Extract<
  IconName,
  'home' | 'security-safe' | 'wallet' | 'menu' | 'swap' | 'user' | 'moneys'
>;

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    currency: 'NGN',
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(value);
};

export const getTabIcon = (route: RouteProp<TabRoutes, keyof TabRoutes>): TabIcon => {
  switch (route.name) {
    case 'Home':
      return 'home';
    case 'Savings':
      return 'security-safe';
    case 'Loans':
      return 'wallet';
    case 'More':
      return 'menu';
    default:
      return 'home';
  }
};

// export * from './validation';
