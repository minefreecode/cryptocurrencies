// import lib
import { lazy } from 'react'

export default [
  {
    path: '/cryptocurrencies',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list/index')),
  },
  {
    path: '/cryptocurrencies/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add/index')),
  },
  {
    path: '/cryptocurrencies/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit/index')),
  },
]
