interface RegisterModel {
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  pin: string;
  confirmPin: string;
}

type UserParams = Pick<
  RegisterModel,
  'password' | 'confirmPassword' | 'email' | 'phoneNumber'
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
  ValidateOTP: { params: UserParams; tokenId: string };
  PersonalDetails: undefined;
  CreatePin: { params: PinParams };
  ConfirmPin: { params: ConfirmPinParams };

  Login: undefined;
  RequestResetOTP: undefined;
  ResetPassword: { email: string };
  ValidateResetOTP: { tokenId: string; email: string };

  AuthSuccess: { type: 'reset' | 'signup' };
};
