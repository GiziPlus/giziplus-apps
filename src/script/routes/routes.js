import home from '../views/pages/home';
import test from '../views/pages/test';
import article from '../views/pages/article';
import forum from '../views/pages/forum';
import aboutUs from '../views/pages/aboutUs';
import loginPage from '../views/pages/loginPage';

const routes = {
  '/': home, // default page
  '/home': home,
  '/test': test,
  '/article/': article,
  '/forum/': forum,
  '/aboutUs/': aboutUs,
  '/loginPage/': loginPage,
};

export default routes;
