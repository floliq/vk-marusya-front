import type z from 'zod';
import type { registerSchema } from './schemas';

export type SessionResult = {
  result: boolean;
};

export type RegisterFormData = z.infer<typeof registerSchema>;
