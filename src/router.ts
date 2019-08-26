import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomePage.vue';
import Contact from './views/ContactPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: true,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/AboutPage.vue'),
    },
  ],
});
