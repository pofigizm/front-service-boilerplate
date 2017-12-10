import isEnabled from 'front-core/src/flags'
import Storage from 'material-ui-icons/Storage'
import PieChart from 'material-ui-icons/PieChart'
import { Menu, Route, Routes } from 'front-core/src/root.d'

const title: string = 'App title'

const routes: Routes<Route> = {
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

const menu: Menu = [
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
