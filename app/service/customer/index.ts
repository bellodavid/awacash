import type { APIResponse, GetBalanceData } from 'api-response';
import type { BVNModel, ProfileModel } from 'customerModel';

import { injectEndpoints } from '../config';

const customerEndpoint = injectEndpoints({
  endpoints: builder => ({
    getAccounts: builder.query<APIResponse<CustomerAccountData[]>, void>({
      providesTags: ['Accounts'],
      query: () => '/Customers/accounts',
    }),
    getBalance: builder.query<APIResponse<GetBalanceData>, void>({
      providesTags: ['Balance'],
      query: () => 'Customers/get-balance',
    }),
    getProfile: builder.query<APIResponse<User>, void>({
      providesTags: ['GetProfile'],
      query: () => 'Customers/me',
    }),
    initializeBVN: builder.mutation<APIResponse<string>, void>({
      query: () => ({
        method: 'POST',
        url: 'Customers/initialize-bvn-auth',
      }),
    }),
    uploadProfile: builder.mutation<APIResponse<string>, ProfileModel>({
      invalidatesTags: ['GetProfile'],
      query: body => ({
        body,
        method: 'POST',
        url: 'Customers/profile-image',
      }),
    }),
    validateBVN: builder.mutation<APIResponse<string>, BVNModel>({
      invalidatesTags: ['GetProfile'],
      query: body => ({
        body,
        method: 'POST',
        url: 'Customers/validate-bvn',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  endpoints: customerEndpoints,
  useGetBalanceQuery,
  useUploadProfileMutation,
  useInitializeBVNMutation,
  useGetProfileQuery,
  useValidateBVNMutation,
  useGetAccountsQuery,
} = customerEndpoint;
