//Импорт функций для работы с redux
import { createStore, applyMiddleware, compose } from 'redux'
//Для асинхронных экшенов
import thunk from 'redux-thunk'
//Включаем логгер для режима разработки
 import { createLogger } from 'redux-logger'
//Редукторы для всех модулей
import rootReducer from './reducers'

//Основная функция конфига
export default function (initialState = {}) {

  // Посредники и усилители хранилищ
  const enhancers = [
      //Сообщаем посреднику о redux-thunk
    applyMiddleware(thunk),
  ]

  //Если это режим разработки. Задается настройкми npm
  if (process.env.NODE_ENV !== 'production') {
    //Сообщаем посреднику о логгере
     enhancers.push(applyMiddleware(createLogger()))
    window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  //Создаем хранилище
  const store = createStore(rootReducer, initialState, compose(...enhancers))
  
  // Для перезагрузки редуктора во время горячей замены
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }
  
  return store
}
