import type z from 'zod';
import type { loginSchema, registerSchema } from './schemas';

export type SessionResult = {
  success: boolean;
};

export type SessionState = {
  isAuth: boolean;
  isAuthChecking: boolean;
  name: string | null;
  surname: string | null;
  email: string | null;
  favorites: string[];
};

export type Profile = {
  favorites: string[];
  surname: string;
  name: string;
  email: string;
};

export type FavouriteFilm = {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  releaseYear: number;
  releaseDate: string;
  genres: string[];
  plot: string;
  runtime: number;
  budget: string | null;
  revenue: string | null;
  homepage: string;
  status: string;
  posterUrl: string | null;
  backdropUrl: string | null;
  trailerUrl: string | null;
  trailerYouTubeId: string | null;
  tmdbRating: number;
  searchL: string;
  keywords: string[];
  countriesOfOrigin: string[];
  languages: string[];
  cast: string[];
  director: string | null;
  production: string | null;
  awardsSummary: string | null;
};

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
