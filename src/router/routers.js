import appRouters from './appRouters'

export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'md-planet'
    },
    component: () => import('@/views/home/home.vue')
  },
  ...appRouters,
]
