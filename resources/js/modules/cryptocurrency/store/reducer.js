import {
  CRYPTOCURRENCY_ADD,
  CRYPTOCURRENCY_UPDATE,
  CRYPTOCURRENCY_REMOVE,
  CRYPTOCURRENCY_LIST,
} from './action-types'

const initialState = []

const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    case CRYPTOCURRENCY_ADD:
      return add(state, payload)
    case CRYPTOCURRENCY_UPDATE:
      return update(state, payload)
    case CRYPTOCURRENCY_REMOVE:
      return remove(state, payload)
    case CRYPTOCURRENCY_LIST:
      return list(state, payload)
    default:
      return state
  }
}

function add(state, payload) {
  const article = state.data.find((article) => (article.id === payload.id))

  if (!article) {
    const data = [...state.data, payload]

    return Object.assign({}, state, { data })
  }

  return update(state, payload)
}

function update(state, payload) {
  const data = state.data.map(obj => {
    if (obj.id === payload.id) {
      return { ...obj, ...payload }
    }
    return obj
  })

  return Object.assign({}, state, { data })
}

function remove(state, id) {
  const data = state.data.filter(obj => obj.id !== id)

  return Object.assign({}, state, { data })
}

function list(state, payload) {
  state = Object.assign({}, payload)

  return state
}

export default reducer
