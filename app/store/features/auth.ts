import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// import { authEndpoints, customerEndpoints } from 'service';

const initialState: AuthState = {
  balance: null,
  isAuthenticated: false,
  token: null,
  user: null,
};

const { actions, reducer } = createSlice({
  // extraReducers: builder => {
  //   builder.addMatcher(authEndpoints.login.matchFulfilled, (state, { payload }) => {
  //     devLogger((payload.data as Response).user, 'USER LOGGED IN');

  //     state.user = (payload.data as Response).user;
  //     state.token = payload.data.token;
  //     state.isAuthenticated = true;
  //   });
  //   // builder.addMatcher(
  //   //   authEndpoints.register.matchFulfilled,
  //   //   (state, { payload }) => {
  //   //     devLogger((payload.data as Response).user, 'USER REGISTERED IN');

  //   //     state.user = (payload.data as Response).user;
  //   //     state.token = payload.data.token;
  //   //   },
  //   // );
  //   builder.addMatcher(
  //     customerEndpoints.getBalance.matchFulfilled,
  //     (state, { payload }) => {
  //       state.balance = payload.data.balance;
  //     },
  //   );
  //   builder.addMatcher(
  //     customerEndpoints.getProfile.matchFulfilled,
  //     (state, { payload }) => {
  //       devLogger(payload.data, 'Profile Refetch');

  //       state.user = payload.data;
  //     },
  //   );
  // },
  initialState,
  name: 'auth',
  reducers: {
    setAuthenticated: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthenticated } = actions;

export default reducer;
