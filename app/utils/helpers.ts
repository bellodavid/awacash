import { RouteProp } from '@react-navigation/native';

import { TabRoutes } from 'navigation';

type TabIcon = Extract<
  IconName,
  'home' | 'security-safe' | 'wallet' | 'menu' | 'swap' | 'user' | 'moneys'
>;

export const getTabIcon = (route: RouteProp<TabRoutes, keyof TabRoutes>): TabIcon => {
  switch (route.name) {
    case 'Home': {
      return 'home';
    }
    case 'Savings': {
      return 'security-safe';
    }
    case 'Loans': {
      return 'wallet';
    }
    case 'More': {
      return 'menu';
    }
    default: {
      return 'home';
    }
  }
};

export const formatCurrency = (value: number | string): string => {
  const amount = typeof value === 'string' ? Number(value) : value;

  return new Intl.NumberFormat('en-NG', {
    currency: 'NGN',
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(amount);
};

export const abbreviateString = (string1: string): string => {
  const split_names = string1.trim().split(' ');

  if (split_names.length > 1) {
    return `${split_names[0]?.charAt(0) + '' + split_names[1]?.charAt(0)}`;
  }
  return split_names[0]?.charAt(0) || '';
};

export const loopedColor = (index: number, colors: string[]): string => {
  const colorLength = colors.length;
  const bodyNumber = index % colorLength;

  return colors[bodyNumber] as string;
};
