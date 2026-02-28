import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { SessionState } from '../model/types';

const initialState: SessionState = {
  isAuth: false,
  isAuthChecking: false,
  name: null,
  surname: null,
  email: null,
  favourites: [],
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
    setName: (state, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string | null>) => {
      state.surname = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    setFavourites: (state, action: PayloadAction<string[]>) => {
      state.favourites = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.name = null;
      state.surname = null;
      state.email = null;
      state.favourites = [];
    },
  },
});

export const selectIsAuth = (state: { session: SessionState }) =>
  state.session.isAuth;
export const selectName = (state: { session: SessionState }) =>
  state.session.name;
export const selectSurname = (state: { session: SessionState }) =>
  state.session.surname;
export const selectEmail = (state: { session: SessionState }) =>
  state.session.email;
export const selectFavourites = (state: { session: SessionState }) =>
  state.session.favourites;

export const {
  setIsAuth,
  setName,
  setSurname,
  setEmail,
  setFavourites,
  logout,
} = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
