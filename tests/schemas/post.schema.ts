import { z } from 'zod';

export const postSchema = z.object({
  userId: z.number().int().positive(),
  id: z.number().int().positive(),
  title: z.string().min(1),
  body: z.string().min(1),
});

export const postsSchema = z.array(postSchema);

export const createdPostSchema = postSchema.extend({
  id: z.number().int().positive(),
});

export type PostContract = z.infer<typeof postSchema>;