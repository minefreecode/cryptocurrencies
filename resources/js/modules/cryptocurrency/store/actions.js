/* ============
 * Actions for the article module
 * ============
 *
 * The actions that are available on the
 * article module.
 */

import {
  CRYPTOCURRENCY_ADD,
  CRYPTOCURRENCY_UPDATE,
  CRYPTOCURRENCY_REMOVE,
  CRYPTOCURRENCY_LIST,
} from './action-types';

export function add(payload) {
  return {
    type: CRYPTOCURRENCY_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: CRYPTOCURRENCY_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: CRYPTOCURRENCY_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: CRYPTOCURRENCY_LIST,
    payload
  }
}