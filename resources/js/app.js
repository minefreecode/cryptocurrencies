require('./bootstrap')

//Загрузка основной библиотеки React
import React from 'react'
//Dom для реакта
import { render } from 'react-dom'
//Подключение Redux
import { Provider } from 'react-redux'
//Подключаем хранилище
import store from './store'

//Загружаем список маршрутныъх компонентов, чтобы реакт знал, куда переходить по ссылкам
import Routes from './routes'

import { authCheck } from './modules/auth/store/actions'

//Включаем проверку авторизации
store.dispatch(authCheck())

//рендерим с использованием flux-паттерна использованием redux. Хранилище указываем в правйдере Redux
render((<Provider store={store}>
    <Routes/>
  </Provider>),
  document.getElementById('app'),
)
