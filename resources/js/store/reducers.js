//Для объединения редукторов
import { combineReducers } from 'redux'

//Аудентификация
import auth from '../modules/auth/store/reducer'
//Для работы с пользователями
import user from '../modules/user/store/reducer'
//Статьи
import articles from '../modules/article/store/reducer'
//Справочник криптовалют
import cryptocurrencies from '../modules/cryptocurrency/store/reducer'

export default combineReducers({ auth, user, articles, cryptocurrencies })
