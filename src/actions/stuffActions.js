// @flow
import * as actionTypes from './actionTypes'
import type { Stuff, StuffAction } from './../types'

function receiveStuff(json: { stuff: Stuff }): StuffAction {
  return { type: actionTypes.RECEIVE_STUFF, payload: json.stuff }
}

// TODO: find out how to type a returned function that returns a promise
export function fetchStuff(): Function {
  return dispatch => {
    return mockFetch().then(json => dispatch(receiveStuff(json)))
  }
}

function mockFetch(): Promise<{ stuff: Stuff }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ stuff: ['thing1', 'thing2', 'thing3'] })
    }, Math.random() * 50)
  })
}
