import { createBrowserRouter } from 'react-router-dom';
import { GenreDetail, Genres, Home } from '@/pages';
import { Layout } from '../Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/genres',
    element: (
      <Layout>
        <Genres />
      </Layout>
    ),
  },
  {
    path: '/genres/:genre',
    element: (
      <Layout>
        <GenreDetail />
      </Layout>
    ),
  },
]);
