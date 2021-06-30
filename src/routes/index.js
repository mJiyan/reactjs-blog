import { BlogList, BlogDetail } from '../views';

const routes = [
  { path: '/', component: BlogList },
  { path: '/blog/details/:id', component: BlogDetail },
];

export default routes;
