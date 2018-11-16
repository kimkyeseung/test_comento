import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Main from '@/components/Main';
import Detail from '@/components/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/:contentsDetail',
      name: 'contentsDetail',
      component: Detail,
    },
  ],
});
