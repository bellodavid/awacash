type Theme = 'light' | 'dark';

type ThemeState = {
  theme: Theme;
  useSystemTheme: boolean;
};

type AuthState = {
  isAuthenticated: boolean;
  user?: User | null;
  token?: string | null;
  balance?: number | null;
  accounts: CustomerAccountData[];
};

type PersistedState = {
  biometric: boolean;
  email: string;
  onboarded: boolean;
  rememberMe: boolean;
  balanceVisible: boolean;
  cardOnboard: boolean;
};
