import Home from '../views/pages/home';
import Test from '../views/pages/test';
import Article from '../views/pages/article';
import Forum from '../views/pages/forum';
import About from '../views/pages/about';
import Login from '../views/pages/login';
import Sign from '../views/pages/sign';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/test': Test,
  '/article': Article,
  '/forum': Forum,
  '/about': About,
  '/login': Login,
  '/sign': Sign,
};

export default routes;
