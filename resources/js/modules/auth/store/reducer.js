//Модуль для работы с HTTP
import HTTP from '../../../utils/Http';
//Импортируем типы экшенов
import {
  AUTH_CHECK,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REFRESH_TOKEN,
  AUTH_RESET_PASSWORD,
} from './action-types';

//Начальный статус - неавторизован
const initialState = {
  isAuthenticated: false,
};

//Редуктор(обрабатывает переданный тип экшена, генерирует из него функцию)
const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    //Если экшен авторизации и обновления токена
    case AUTH_REFRESH_TOKEN:
    case AUTH_LOGIN:
      return login(state, payload);

     //Экшен проверки авторизации
    case AUTH_CHECK:
      return checkAuth(state);

    //Экшен выхода
    case AUTH_LOGOUT:
      return logout(state);

    //Экшен восстановления пароля
    case AUTH_RESET_PASSWORD:
      return resetPassword(state);
    default:
      return state;
  }
};

/**
 * Функция авторизации
 * @param state Данные redux
 * @param payload Входная данная
 * @returns {{isAuthenticated: boolean}}
 */
function login(state, payload) {
  localStorage.setItem('access_token', payload);//Сохраняем в локальном хранилище токен
  HTTP.defaults.headers.common['Authorization'] = `Bearer ${payload}`; //Устанавливаем данные для заголовков

  return {
    ...state, isAuthenticated: true,
  }
}

/**
 * ПРроверка авторизации
 * @param state Данные redux
 * @returns {{isAuthenticated}|*}
 */
function checkAuth(state) {
  //Добавляем переменную, isAuthenticated в булевом формате
  state = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('access_token')
  })

  if (state.isAuthenticated) {
    HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`; //Добавляем токен
  }

  return state;
}

/**
 * Выход
 * @param state
 * @returns {{isAuthenticated: boolean}}
 */
function logout(state) {
  localStorage.removeItem('access_token') //Удаляем из локального хранилища токен

  return {
    ...state, isAuthenticated: false
  }
}

//Сброс пароля
function resetPassword(state) {
  return {
    ...state, resetPassword: true,
  }
}

//Экспортируем константу getAuth
export const getAuth = state => state.auth.isAuthenticated;

export default reducer;
