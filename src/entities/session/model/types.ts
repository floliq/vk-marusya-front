import type z from 'zod';
import type { loginSchema, registerSchema } from './schemas';

export type SessionResult = {
  success: boolean;
};

export type SessionState = {
  isAuth: boolean;
  isAuthChecking: boolean;
  userName: string | null;
};

export type Profile = {
  favourites: string[];
  surname: string;
  name: string;
  email: string;
};

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
