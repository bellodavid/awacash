import { NavigatorScreenParams } from '@react-navigation/native';

import { pallets } from 'constant';
import { HomeRoutes } from 'navigation';

interface HomeSection {
  title: string;
  icon: IconName;
  color: string;
  route?: NavigatorScreenParams<HomeRoutes>;
}

export const homeSection: HomeSection[] = [
  {
    color: '#23E7B8',
    icon: 'send',
    route: { screen: 'TransferMethod' },
    title: 'Transfer',
  },
  {
    color: '#FDAA49',
    icon: 'receipt-2',
    title: 'Paybills',
  },
  {
    color: '#4460F1',
    icon: 'wifi-square',
    title: 'Data & Airtime',
  },
  {
    color: pallets.primary,
    icon: 'add-circle',
    title: 'Favorites',
  },
];
