import Vue from 'vue'
import Router from 'vue-router'
/* import Map from '@/components/Map' */
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      template: '<span>Map</span>'
    },
    {
      path: '/test/',
      name: 'Test',
      /* template: '<span>Test</span>' */
      component: Test
    }
  ]
})
