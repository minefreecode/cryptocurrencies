import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as cryptocurrencyActions from './store/actions'

function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}


export function cryptocurrencyAddRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', params.selectedFile)
      formData.append('name', params.name)
      formData.append('description', params.description)
      formData.append('symbol', params.symbol)

      Http.defaults.headers.common.Accept = 'multipart/form-data';
      Http.post('/cryptocurrencies', formData)
        .then(res => {
          dispatch(cryptocurrencyActions.add(transformResponse(res.data)))
          return resolve()
        })
        .catch((err) => {
            console.log(err);
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

export function cryptocurrencyUpdateRequest(params) {
  return dispatch => (
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('image', params.selectedFile);
      formData.append('name', params.name);
      formData.append('description', params.description);
      formData.append('symbol', params.symbol);
      formData.append('id', params.id);
      formData.append('_method', 'PATCH');

      Http.defaults.headers.common.Accept = 'multipart/form-data';
      Http.post(`/cryptocurrencies/${params.id}`, formData)
      //Http.patch(`cryptocurrencies/${params.id}`, transformRequest(params))
        .then(res => {
          dispatch(cryptocurrencyActions.add(transformResponse(res.data)))
          return resolve()
        })
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

export function cryptocurrencyRemoveRequest(id) {
  return dispatch => {
    Http.delete(`cryptocurrencies/${id}`)
      .then(() => {
        dispatch(cryptocurrencyActions.remove(id))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

/**
 * Получить список Криптовалют
 * @returns {function(...[*]=)}
 */
export function cryptocurrencyListRequest() {
    let url = '/cryptocurrencies';

    return dispatch => {
        Http.get(url)
            .then((res) => {
                dispatch(cryptocurrencyActions.list(transformResponse(res.data)))
            })
            .catch((err) => {
                // TODO: handle err
                console.error(err.response)
            })
    }
}

export function cryptocurrencyEditRequest(id) {
  return dispatch => {
    Http.get(`cryptocurrencies/${id}`)
      .then((res) => {
        dispatch(cryptocurrencyActions.add(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
}

}
