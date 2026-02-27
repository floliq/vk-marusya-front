import z from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  surname: z.string().min(1),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});
