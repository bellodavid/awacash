import type { RegisterModel } from 'authModels';

type UserParams = Pick<
  RegisterModel,
  'password' | 'confirmPassword' | 'email' | 'phoneNumber' | 'hash'
>;

type PinParams = Omit<RegisterModel, 'confirmPin' | 'pin'>;
type ConfirmPinParams = Omit<RegisterModel, 'confirmPin'>;

export type AuthRoutes = {
  Welcome: undefined;

  AwacashAccountNo: undefined;
  AwacashValidateOTP: undefined;
  AwacashConfirmPin: undefined;
  AwacashCreatePin: undefined;
  AwacashPersonalDetails: undefined;
  AwacashSignUpSuccess: undefined;

  SignUp: undefined;
  ValidateOTP: UserParams;
  PersonalDetails: UserParams;
  CreatePin: PinParams;
  ConfirmPin: ConfirmPinParams;

  Login: undefined;
  RequestResetOTP: undefined;
  ResetPassword: { email: string };
  ValidateResetOTP: { hash: string; email: string };

  AuthSuccess: { type: 'reset' | 'signup' };
};
