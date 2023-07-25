import type {
  ChangePasswordModel,
  ChangePinModel,
  LoginModel,
  RegisterModel,
  SendPhoneVerificationModel,
  VerifyPhoneModel,
} from 'authModels';
import type { APIResponse } from 'api-response';

import { injectEndpoints } from '../config';

const authenticationEndpoints = injectEndpoints({
  endpoints: builder => ({
    changePassword: builder.mutation<APIResponse<boolean>, ChangePasswordModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'Auth/change-password',
      }),
    }),
    changePin: builder.mutation<APIResponse<boolean>, ChangePinModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'Auth/change-pin',
      }),
    }),
    login: builder.mutation<UserResponse, LoginModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'auth/login',
      }),
    }),
    register: builder.mutation<UserResponse, RegisterModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'Auth/register',
      }),
    }),
    sendPhoneVerification: builder.mutation<
      APIResponse<string>,
      SendPhoneVerificationModel
    >({
      query: body => ({
        body,
        method: 'POST',
        url: 'Auth/send-phone-verification-code',
      }),
    }),
    verifyPhone: builder.mutation<APIResponse<string>, VerifyPhoneModel>({
      query: body => ({
        body,
        method: 'POST',
        url: 'Auth/verify-phone',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  endpoints: authEndpoints,
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
  useChangePinMutation,
  useSendPhoneVerificationMutation,
  useVerifyPhoneMutation,
} = authenticationEndpoints;
