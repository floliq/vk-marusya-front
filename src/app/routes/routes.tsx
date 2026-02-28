import { createBrowserRouter } from 'react-router-dom';
import { Film } from '@/pages/film';
import { GenreDetail } from '@/pages/genre-detail';
import { Genres } from '@/pages/genres';
import { Home } from '@/pages/home';
import { Layout } from '../Layout';
import { Profile } from '@/pages/profile';
import { RequireAuth } from '@/features/auth';

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
  {
    path: '/films/:filmId',
    element: (
      <Layout>
        <Film />
      </Layout>
    ),
  },
  {
    path: '/profile',
    element: (
      <Layout>
        <RequireAuth>
          <Profile />
        </RequireAuth>
      </Layout>
    ),
  },
]);
