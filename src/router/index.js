import Vue from 'vue';
import Router from 'vue-router';

// Components
import HelloWorld from '@/components/HelloWorld';
import CatalogPage from '@/components/Catalog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/catalog',
      name: 'CatalogPage',
      component: CatalogPage
    }
  ]
});
