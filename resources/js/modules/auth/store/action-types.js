//Типы экшенов авторизации
export const AUTH_CHECK = 'AUTH_CHECK' //для проверки
export const AUTH_LOGIN = 'AUTH_LOGIN'//для входа
export const AUTH_LOGOUT = 'AUTH_LOGOUT'//для выхода
export const AUTH_REFRESH_TOKEN = 'AUTH_REFRESH_TOKEN'//для обновления токена
export const AUTH_RESET_PASSWORD = 'AUTH_RESET_PASSWORD'//для восстановления пароля
export const AUTH_USER = 'AUTH_USER'

export default {
  AUTH_CHECK,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_REFRESH_TOKEN,
  AUTH_RESET_PASSWORD,
  AUTH_USER,
}