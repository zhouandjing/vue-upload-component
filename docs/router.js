// import Vue from 'vue'
import VueRouter from 'vue-router'

import i18n from './i18n'
import RouterComponent from './views/Router'
import DocumentComponent from './views/Document'
import ExampleComponent from './views/Example'

import FullExampleComponent from './views/examples/Full'
import SimpleExampleComponent from './views/examples/Simple'
import AvatarExampleComponent from './views/examples/Avatar'
import DragExampleComponent from './views/examples/Drag'
import MultipleExampleComponent from './views/examples/Multiple'
import VuexExampleComponent from './views/examples/Vuex'



// Vue.use(VueRouter)


let examples = [
  {
    path: '',
    component: FullExampleComponent,
  },
  {
    path: 'full',
    component: FullExampleComponent,
  },
  {
    path: 'simple',
    component: SimpleExampleComponent,
  },
  {
    path: 'avatar',
    component: AvatarExampleComponent,
  },
  {
    path: 'drag',
    component: DragExampleComponent,
  },
  {
    path: 'multiple',
    component: MultipleExampleComponent,
  },
  {
    path: 'vuex',
    component: VuexExampleComponent,
  },
]



const router = new VueRouter({
  mode: 'hash',
  fallback: false,
  scrollBehavior() {
    return { y: 0 }
  },
  routes: [
    {
      path: '/:locale(' + Object.keys(i18n.messages).join('|') + ')?',
      component: RouterComponent,
      children: [
        {
          path: 'documents',
          component: DocumentComponent,
        },
        {
          path: 'examples',
          component: ExampleComponent,
          children: examples,
        },
        {
          path: '',
          component: ExampleComponent,
          children: examples,
        },
      ]
    },
  ]
})
export default router
