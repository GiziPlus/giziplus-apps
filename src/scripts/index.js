import 'regenerator-runtime';
import '../styles/input.css';
import 'flowbite';
import App from './views/app';

import './views/components/nav-bar';
import './views/components/app-hero';
import './views/components/app-footer';
import './views/components/app-layanan';
import './views/components/home-content';
import './views/components/app-status';
import './views/components/app-test';
import './views/components/app-panduan';
import './views/components/app-artikel';
import './views/components/artikel-content';
import './views/components/app-forum';
import './views/components/app-tentang';
import './views/components/app-tim';
import './views/components/app-login';
import './views/components/login-form';
import './views/components/app-sign';
import './views/components/sign-form';

const app = new App({
  content: document.querySelector('#mainContent'),
});

function refreshPage() {
  location.reload();
}

window.addEventListener('hashchange', refreshPage, () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});
