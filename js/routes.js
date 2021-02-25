// import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js';
import emailCompose from './apps/email/pages/email-compose.cmp.js';

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/book',
    component: bookApp,
  },
  {
    path: '/keep',
    component: keepApp,
  },
  {
    path: '/email',
    component: emailApp,
  },
  {
    path: '/email/compose',
    component: emailCompose,
  },
  {
    path: '/email/:id',
    component: emailDetails,
  },

];

export const myRouter = new VueRouter({ routes });
