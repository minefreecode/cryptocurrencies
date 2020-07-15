/**
 * Основной модуль реакта
 * Используем  Suspense для режима ожидания
 */
import React, {Suspense} from 'react'

//Типы свойств для объектов
import PropTypes from 'prop-types'

/**
 * Route  - элемент роута
 * Redirect - для создания редиректа
 */
import { Route, Redirect } from 'react-router-dom'

//Этот компонент будет подключаться к хранилищу
import { connect } from 'react-redux'

/**
 * Компонент "Приватный роутер" PrivateRoute
 *
 * @param Component Входной параметр компоент
 * @param isAuthenticated Входной параметр, что аудентифицировались
 * @param rest Входные остальные параметры
 * @returns {*}
 * @constructor
 */
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return <Route {...rest} render={props => {
        return <Suspense fallback={<div>Loading...</div>}>
            {
                isAuthenticated
                    ? <Component {...props}/>
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location },//props.location - текщее расположение в путях
                    }}/>
            }
        </Suspense>
    }}/>
}

/**
 * Типы свойств для нашего компонента
 * Свойство component обязательно нужно заполнить
 */
PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
}

// Восстановление свойств из хранилища как свойства
function mapStateToProps(store) {
  return {
    isAuthenticated: store.auth.isAuthenticated,
  }
}

/**
 * Экспортируем компонент-контейнер с доступом к хранилищу
 * mapStateToProps будет вызываться каждый раз, когда будет меняться хранилище и будет обновлять свойство isAuthenticated компонента
 */
export default connect(mapStateToProps)(PrivateRoute)
