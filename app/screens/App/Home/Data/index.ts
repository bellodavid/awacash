import { NavigatorScreenParams } from '@react-navigation/native';

import { pallets } from 'constant';
import { HomeRoutes, TransferRoutes } from 'navigation';

interface HomeSection {
  title: string;
  icon: IconName;
  color: string;
  route?: NavigatorScreenParams<HomeRoutes>;
}

interface TransferSectionProps {
  title: string;
  route: keyof TransferRoutes;
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
    route: {
      params: { screen: 'TransferMethod' },
      screen: 'Transfer',
    },
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
    message: 'From Ola',
    type: 'credit',
  },
  {
    amount: '75000',
    date: new Date(),
    message: 'From Chinedu',
    type: 'debit',
  },
  {
    amount: '2500',
    date: new Date(),
    message: 'From James',
    type: 'credit',
  },
  {
    amount: '5000',
    date: new Date(),
    message: 'From Agba',
    type: 'credit',
  },
  {
    amount: '5000',
    date: new Date(),
    message: 'From Tunde',
    type: 'credit',
  },
];

export const transferSection: TransferSectionProps[] = [
  {
    route: 'AwacashTransfer',
    title: 'Transfer to Awacash Account',
  },
  {
    route: 'Beneficiary',
    title: 'Transfer to a Beneficiary',
  },
  {
    route: 'BankTransfer',
    title: 'Transfer to other Banks',
  },
  {
    route: 'MyAccountTransfer',
    title: 'Transfer to my Account',
  },
];
