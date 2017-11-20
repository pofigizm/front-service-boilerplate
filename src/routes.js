import isEnabled from 'front-core/src/flags'
import { Storage, PieChart } from 'front-core/src/icons'

const title = 'App title'

const routes = {
  root: {
    path: '/',
    modulePath: '_template',
  },

  template: {
    path: '/template',
    modulePath: '_template',
    role: true,
  },

  feature: {
    path: '/page-under-flag',
    modulePath: '_template',
  },
}

const menu = [
  {
    name: 'Root',
    Icon: Storage,
    link: '/',
  },

  {
    name: 'Template',
    Icon: PieChart,
    link: '/template',
  },

  isEnabled('feature-page') && {
    name: 'Page with flag',
    Icon: Storage,
    link: '/page-under-flag',
  },
].filter(Boolean)

export {
  title,
  routes,
  menu,
}
