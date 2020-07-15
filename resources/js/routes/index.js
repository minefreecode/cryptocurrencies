// Импортировать реакт
import React from 'react'

/**
 * Используем BrowserRouter для такого вида URL http://example.com/about
 * Switch нужен чтобы в него вложить все роуты
 */
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// получаем маршруты-компоненты
import routes from './routes'
import PrivateRoute from './Private'
import PublicRoute from './Public'

import Layout from '../layout'

/**
 *  Router используется для хранения истории и стутусов
 */
const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        {routes.map((route, i) => { //Создаем массив из элементов PrivateRoute и  в зависимости от необходимости аудентификации
            //Если роут, требующий аудентификации
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />
          }
          return <PublicRoute key={i} {...route} />
        })}
      </Switch>
    </Layout>
  </Router>
)

export default Routes
