export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type CreatePostPayload = Omit<Post, 'id'>;

export type UpdatePostPayload = Post;