// импорт метода для ленивой загрузки
import { lazy } from 'react'

//Маршруты
const routes = [
  {
    //Основной маршрут
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home/index')), //Основной компонент
  },
  {
    path: '/blog',
    exact: true,
    component: lazy(() => import('./pages/blog/list/index')), //Компонент статей
  },
  {
    path: '/blog/:slug',
    exact: true,
    component: lazy(() => import('./pages/blog/details/index')), //Компонент для детализации статей
  },
]

export default routes
