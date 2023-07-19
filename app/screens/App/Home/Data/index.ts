import { NavigatorScreenParams } from '@react-navigation/native';

import { pallets } from 'constant';
import { HomeRoutes } from 'navigation';

interface HomeSection {
  title: string;
  icon: IconName;
  color: string;
  route?: NavigatorScreenParams<HomeRoutes>;
}

interface TransactionProps {
  type: 'debit' | 'credit';
  amount: string;
  date: Date;
  message: string;
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

export const transactions: TransactionProps[] = [
  {
    amount: '5000',
    date: new Date(),
    message: 'From Tunde',
    type: 'credit',
  },
  {
    amount: '75000',
    date: new Date(),
    message: 'From Tunde',
    type: 'debit',
  },
  {
    amount: '2500',
    date: new Date(),
    message: 'From Tunde',
    type: 'credit',
  },
  {
    amount: '5000',
    date: new Date(),
    message: 'From Tunde',
    type: 'credit',
  },
  {
    amount: '5000',
    date: new Date(),
    message: 'From Tunde',
    type: 'credit',
  },
];
