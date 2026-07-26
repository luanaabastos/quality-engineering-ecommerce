import type {
  CreatePostPayload,
  UpdatePostPayload,
} from '../types/post.types';

export const newPostPayload: CreatePostPayload = {
  title: 'Quality Engineering',
  body: 'Automação de testes de API com Playwright',
  userId: 1,
};

export const updatedPostPayload: UpdatePostPayload = {
  id: 1,
  title: 'Post atualizado',
  body: 'Conteúdo atualizado via API',
  userId: 1,
};