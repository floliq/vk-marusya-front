import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { SessionState } from '../model/types';
import { favouritesApi } from '../api/favoiritesApi';

const initialState: SessionState = {
  isAuth: false,
  isAuthChecking: false,
  name: null,
  surname: null,
  email: null,
  favorites: [],
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
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.isAuthChecking = false;
      state.name = null;
      state.surname = null;
      state.email = null;
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        favouritesApi.endpoints.addFavourite.matchFulfilled,
        (state, action) => {
          const id = String(action.meta.arg.originalArgs);
          if (!state.favorites.includes(id)) {
            state.favorites.push(id);
          }
        }
      )
      .addMatcher(
        favouritesApi.endpoints.removeFavourite.matchFulfilled,
        (state, action) => {
          const id = String(action.meta.arg.originalArgs);
          state.favorites = state.favorites.filter((fav) => fav !== id);
        }
      );
  },
});

export const selectIsAuth = (state: { session: SessionState }) =>
  state.session.isAuth;
export const selectIsAuthChecking = (state: { session: SessionState }) =>
  state.session.isAuthChecking;
export const selectName = (state: { session: SessionState }) =>
  state.session.name;
export const selectSurname = (state: { session: SessionState }) =>
  state.session.surname;
export const selectEmail = (state: { session: SessionState }) =>
  state.session.email;
export const selectFavorites = (state: { session: SessionState }) =>
  state.session.favorites;

export const {
  setIsAuth,
  setIsAuthChecking,
  setName,
  setSurname,
  setEmail,
  setFavorites,
  logout,
} = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
