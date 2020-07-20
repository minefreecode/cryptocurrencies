import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as userActions from './store/actions'

/**
 * Запрос на обновление пользователя
 * @param params Входные параметры
 * @returns {function(*=): Promise<unknown>} Возвращает объект Promise
 */
export function userUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      Http.patch(`/users/${params.id}`, Transformer.send(params))
          //Запрос выполнен успешно
        .then(res => {
          dispatch(userActions.userUpdate(Transformer.fetch(res.data.user)))
          return resolve()
        })
          //В случае ошибок в запросе
        .catch((err) => {
          const statusCode = err.response.status;
          const data = {
            error: null,
            statusCode,
          };

          if (statusCode === 422) {
            const resetErrors = {
              errors: err.response.data,
              replace: false,
              searchStr: '',
              replaceStr: '',
            };
            data.error = Transformer.resetValidationFields(resetErrors);
          } else if (statusCode === 401) {
            data.error = err.response.data.message;
          }
          return reject(data);
        })
    })
  )
}
