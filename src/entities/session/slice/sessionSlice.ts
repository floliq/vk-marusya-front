import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { SessionState } from '../model/types';

const initialState: SessionState = {
  isAuth: false,
  isAuthChecking: false,
  userName: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setIsAuthChecking: (state, action: PayloadAction<boolean>) => {
      state.isAuthChecking = action.payload;
    },
    setUserName: (state, action: PayloadAction<string | null>) => {
      state.userName = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userName = null;
    },
  },
});

export const selectIsAuth = (state: { session: SessionState }) =>
  state.session.isAuth;
export const selectUserName = (state: { session: SessionState }) =>
  state.session.userName;

export const { setIsAuth, setUserName, logout } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
