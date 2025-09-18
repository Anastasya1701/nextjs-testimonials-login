import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
  newsletter: z.boolean().optional()
});

export type SignupInput = z.infer<typeof signupSchema>;