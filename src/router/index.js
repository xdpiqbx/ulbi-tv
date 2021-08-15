import About from '../Pages/About';
import Posts from '../Pages/Posts';
import PostPage from '../Pages/PostPage';
import ErrorPage from '../Pages/ErrorPage';
import Login from '../Pages/Login';

export const privateRoutes = [
  { path: '/about', component: About, exact: false },
  { path: '/posts', component: Posts, exact: true },
  { path: '/posts/:id', component: PostPage, exact: true },
  { path: '/error', component: ErrorPage, exact: false },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: false },
  { path: '/error', component: ErrorPage, exact: false },
];
